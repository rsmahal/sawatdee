let activeAudio: HTMLAudioElement | null = null;
let manifestCache: Record<string, string> | null = null;
let manifestPromise: Promise<Record<string, string>> | null = null;

function hasSynthesis() {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

function loadManifest(): Promise<Record<string, string>> {
  if (manifestCache) return Promise.resolve(manifestCache);
  if (!manifestPromise) {
    manifestPromise = fetch("/audio/th/manifest.json")
      .then((res) => (res.ok ? (res.json() as Promise<Record<string, string>>) : {}))
      .catch(() => ({}))
      .then((data) => {
        manifestCache = data;
        return data;
      });
  }
  return manifestPromise;
}

export function canSpeak() {
  return typeof window !== "undefined";
}

export function warmVoices() {
  if (typeof window === "undefined") return;
  void loadManifest();
  if (!hasSynthesis()) return;
  window.speechSynthesis.getVoices();
  window.speechSynthesis.addEventListener("voiceschanged", () => {
    window.speechSynthesis.getVoices();
  });
}

function speakWithSynthesis(text: string) {
  if (!hasSynthesis() || !text) return;
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "th-TH";
  utter.rate = 0.82;
  const voice = synth.getVoices().find((item) => item.lang.toLowerCase().startsWith("th"));
  if (voice) utter.voice = voice;
  synth.cancel();
  synth.speak(utter);
}

export function stopSpeech() {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
    activeAudio = null;
  }
  if (hasSynthesis()) {
    window.speechSynthesis.cancel();
  }
}

function playClip(clipId: string, fallbackText: string) {
  const audio = new Audio(`/audio/th/${clipId}.mp3`);
  audio.preload = "auto";
  activeAudio = audio;
  audio.addEventListener("ended", () => {
    if (activeAudio === audio) activeAudio = null;
  });
  audio.addEventListener("error", () => {
    if (activeAudio === audio) {
      activeAudio = null;
      speakWithSynthesis(fallbackText);
    }
  });
  void audio.play().catch((err: unknown) => {
    if (activeAudio !== audio) return;
    activeAudio = null;
    const name = err instanceof Error ? err.name : "";
    if (name !== "NotAllowedError" && name !== "AbortError") {
      speakWithSynthesis(fallbackText);
    }
  });
}

export function speakThai(text: string) {
  if (typeof window === "undefined" || !text) return;
  stopSpeech();

  if (manifestCache) {
    const clipId = manifestCache[text];
    if (clipId) {
      playClip(clipId, text);
      return;
    }
    speakWithSynthesis(text);
    return;
  }

  void loadManifest().then((map) => {
    const clipId = map[text];
    if (clipId) {
      playClip(clipId, text);
    } else {
      speakWithSynthesis(text);
    }
  });
}
