let textArea = document.getElementById("textArea");
let btn = document.getElementById("btn");

btn.addEventListener("click", convertToAudio);

function convertToAudio() {
  let text = textArea.value;

  let speech = new SpeechSynthesisUtterance();

  speech.text = text;
  speech.voice = window.speechSynthesis.getVoices()[0];
  window.speechSynthesis.speak(speech);
  textArea.value = "";
}
