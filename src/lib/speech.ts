export function canSpeak() {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function warmVoices() {
  if (!canSpeak()) return;
  window.speechSynthesis.getVoices();
  window.speechSynthesis.addEventListener("voiceschanged", () => {
    window.speechSynthesis.getVoices();
  });
}

export function speakThai(text: string) {
  if (!canSpeak() || !text) return;
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
  if (!canSpeak()) return;
  window.speechSynthesis.cancel();
}
