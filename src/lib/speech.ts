import type { Speaker } from "@/lib/curriculum";
import { useProgress, type SpeechMethod } from "@/lib/progress";

type AudioScope = Speaker | "base";

let activeAudio: HTMLAudioElement | null = null;
let playToken = 0;

const manifestCache: Partial<Record<AudioScope, Record<string, string>>> = {};
const manifestPromises: Partial<Record<AudioScope, Promise<Record<string, string>>>> = {};
let edgeLiveCache: { value: boolean; at: number } | null = null;
let edgeLivePromise: Promise<boolean> | null = null;

function hasSynthesis() {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

function manifestUrl(scope: AudioScope) {
  return scope === "base" ? "/audio/th/manifest.json" : `/audio/th/${scope}/manifest.json`;
}

function clipUrl(scope: AudioScope, clipId: string) {
  return scope === "base" ? `/audio/th/${clipId}.mp3` : `/audio/th/${scope}/${clipId}.mp3`;
}

function liveEdgeUrl(speaker: Speaker, text: string) {
  return `/api/tts?speaker=${encodeURIComponent(speaker)}&text=${encodeURIComponent(text)}`;
}

function loadManifest(scope: AudioScope): Promise<Record<string, string>> {
  const cached = manifestCache[scope];
  if (cached) return Promise.resolve(cached);

  if (!manifestPromises[scope]) {
    manifestPromises[scope] = fetch(manifestUrl(scope))
      .then((res) => {
        const contentType = res.headers.get("content-type") ?? "";
        if (!res.ok || !contentType.includes("json")) return {};
        return res.json() as Promise<Record<string, string>>;
      })
      .catch(() => ({}))
      .then((data) => {
        manifestCache[scope] = data;
        return data;
      });
  }
  return manifestPromises[scope]!;
}

function loadEdgeLiveAvailability(): Promise<boolean> {
  if (edgeLiveCache && (edgeLiveCache.value || Date.now() - edgeLiveCache.at < 60_000)) {
    return Promise.resolve(edgeLiveCache.value);
  }
  if (!edgeLivePromise) {
    edgeLivePromise = fetch("/api/tts?probe=1")
      .then(async (res) => {
        const contentType = res.headers.get("content-type") ?? "";
        if (!res.ok || !contentType.includes("json")) return false;
        const data = (await res.json()) as { edge?: boolean };
        return Boolean(data?.edge);
      })
      .catch(() => false)
      .then((value) => {
        edgeLiveCache = { value, at: Date.now() };
        edgeLivePromise = null;
        return value;
      });
  }
  return edgeLivePromise;
}

export function canSpeak() {
  return typeof window !== "undefined";
}

export type SpeechAvailability = {
  edge: boolean;
  google: boolean;
};

export function getCachedSpeechAvailability(): SpeechAvailability {
  const fCount = manifestCache.f ? Object.keys(manifestCache.f).length : 0;
  const mCount = manifestCache.m ? Object.keys(manifestCache.m).length : 0;
  const baseCount = manifestCache.base ? Object.keys(manifestCache.base).length : 0;
  return {
    edge: fCount > 0 || mCount > 0 || edgeLiveCache?.value === true,
    google: baseCount > 0,
  };
}

export async function checkSpeechAvailability(): Promise<SpeechAvailability> {
  const [fMap, mMap, baseMap, liveEdge] = await Promise.all([
    loadManifest("f"),
    loadManifest("m"),
    loadManifest("base"),
    loadEdgeLiveAvailability(),
  ]);
  return {
    edge: Object.keys(fMap).length > 0 || Object.keys(mMap).length > 0 || liveEdge,
    google: Object.keys(baseMap).length > 0,
  };
}

export function warmVoices() {
  if (typeof window === "undefined") return;
  void loadManifest("f");
  void loadManifest("m");
  void loadManifest("base");
  void loadEdgeLiveAvailability();
  if (!hasSynthesis()) return;
  window.speechSynthesis.getVoices();
  window.speechSynthesis.addEventListener("voiceschanged", () => {
    window.speechSynthesis.getVoices();
  });
}

function pickSynthesisVoice(voices: SpeechSynthesisVoice[], speaker: Speaker) {
  const thaiVoices = voices.filter((item) => item.lang.toLowerCase().startsWith("th"));
  if (thaiVoices.length === 0) return undefined;
  const pattern =
    speaker === "m" ? /niwat|pattara|\bmale\b|\bman\b|ชาย/i : /premwadee|achara|kanya|\bfemale\b|\bwoman\b|หญิง/i;
  return thaiVoices.find((item) => pattern.test(item.name)) ?? thaiVoices[0];
}

function speakWithSynthesis(text: string, speaker: Speaker) {
  if (!hasSynthesis() || !text) return;
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "th-TH";
  utter.rate = 0.82;
  const voice = pickSynthesisVoice(synth.getVoices(), speaker);
  if (voice) utter.voice = voice;
  synth.cancel();
  synth.speak(utter);
}

export function stopSpeech() {
  playToken += 1;
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
    activeAudio = null;
  }
  if (hasSynthesis()) {
    window.speechSynthesis.cancel();
  }
}

function playCandidates(urls: string[], fallbackText: string, speaker: Speaker, token: number) {
  if (token !== playToken) return;
  const [nextUrl, ...rest] = urls;
  if (!nextUrl) {
    speakWithSynthesis(fallbackText, speaker);
    return;
  }

  const audio = new Audio(nextUrl);
  audio.preload = "auto";
  activeAudio = audio;

  const advanceFallback = () => {
    if (token !== playToken || activeAudio !== audio) return;
    activeAudio = null;
    playCandidates(rest, fallbackText, speaker, token);
  };

  audio.addEventListener("ended", () => {
    if (activeAudio === audio) activeAudio = null;
  });
  audio.addEventListener("error", advanceFallback);

  void audio.play().catch((err: unknown) => {
    if (token !== playToken || activeAudio !== audio) return;
    activeAudio = null;
    const name = err instanceof Error ? err.name : "";
    if (name !== "NotAllowedError" && name !== "AbortError") {
      playCandidates(rest, fallbackText, speaker, token);
    }
  });
}

function resolveCandidates(
  text: string,
  speaker: Speaker,
  method: SpeechMethod,
  speakerMap: Record<string, string>,
  baseMap: Record<string, string>,
  allowLiveEdge: boolean,
) {
  const urls: string[] = [];
  if (method === "auto") {
    const speakerId = speakerMap[text];
    if (speakerId) {
      urls.push(clipUrl(speaker, speakerId));
    } else if (allowLiveEdge) {
      urls.push(liveEdgeUrl(speaker, text));
    }
  }
  const baseId = baseMap[text];
  if (baseId) urls.push(clipUrl("base", baseId));
  return urls;
}

export function speakThai(text: string, speakerOverride?: Speaker, methodOverride?: SpeechMethod) {
  if (typeof window === "undefined" || !text) return;
  stopSpeech();
  const token = playToken;
  const state = useProgress.getState();
  const speaker = speakerOverride ?? state.speaker;
  const method = methodOverride ?? state.speechMethod;

  if (method === "browser") {
    speakWithSynthesis(text, speaker);
    return;
  }

  if (method === "google") {
    const baseCached = manifestCache.base;
    if (baseCached) {
      playCandidates(resolveCandidates(text, speaker, method, {}, baseCached, false), text, speaker, token);
      return;
    }
    void loadManifest("base").then((baseMap) => {
      if (token !== playToken) return;
      playCandidates(resolveCandidates(text, speaker, method, {}, baseMap, false), text, speaker, token);
    });
    return;
  }

  const speakerCached = manifestCache[speaker];
  const baseCached = manifestCache.base;
  if (speakerCached && baseCached && edgeLiveCache !== null) {
    const candidates = resolveCandidates(text, speaker, method, speakerCached, baseCached, edgeLiveCache.value);
    playCandidates(candidates, text, speaker, token);
    return;
  }

  void Promise.all([loadManifest(speaker), loadManifest("base"), loadEdgeLiveAvailability()]).then(
    ([speakerMap, baseMap, liveEdge]) => {
      if (token !== playToken) return;
      const candidates = resolveCandidates(text, speaker, method, speakerMap, baseMap, liveEdge);
      playCandidates(candidates, text, speaker, token);
    },
  );
}
