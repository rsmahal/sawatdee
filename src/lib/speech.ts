import { THAI_AUDIO_FILES } from "./audio-manifest";

let activeAudio: HTMLAudioElement | null = null;

function hasSynthesis() {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function canSpeak() {
  return typeof window !== "undefined";
}

export function warmVoices() {
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

export function speakThai(text: string) {
  if (typeof window === "undefined" || !text) return;
  stopSpeech();

  const clipId = THAI_AUDIO_FILES[text];
  if (clipId) {
    const audio = new Audio(`/audio/th/${clipId}.mp3`);
    audio.preload = "auto";
    activeAudio = audio;
    audio.addEventListener("ended", () => {
      if (activeAudio === audio) activeAudio = null;
    });
    audio.addEventListener("error", () => {
      if (activeAudio === audio) {
        activeAudio = null;
        speakWithSynthesis(text);
      }
    });
    void audio.play().catch((err: unknown) => {
      if (activeAudio !== audio) return;
      activeAudio = null;
      const name = err instanceof Error ? err.name : "";
      if (name !== "NotAllowedError" && name !== "AbortError") {
        speakWithSynthesis(text);
      }
    });
    return;
  }

  speakWithSynthesis(text);
}
