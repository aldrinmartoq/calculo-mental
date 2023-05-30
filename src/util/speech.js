let synth
let voice
let attempts = 0

function load_voices() {
  attempts++
  console.log(`load_voices attempt: ${attempts}`)

  const voices = synth.getVoices()
  if (voices.length) voice = voices.find(_voice => /es[-_]ES/.test(_voice.lang))
  if (!voice) {
    if (attempts < 10) {
      setTimeout(() => load_voices(), 250)
    } else {
      console.error('`es-ES` voice NOT found.')
    }
  }
}

if ('speechSynthesis' in window) {
  synth = window.speechSynthesis
  load_voices()
}

export default {
  speak(text) {
    if (!synth || synth.speaking) return

    const output = text.replace(/(…|[._]{2,})/, '')
    const utterance = new SpeechSynthesisUtterance(output)
    utterance.addEventListener('error', error => console.error(error))
    utterance.lang = 'es-ES'
    utterance.pitch = 1
    utterance.rate = 0.7
    utterance.voice = voice
    utterance.volume = 1
    synth.speak(utterance)
  }
}
