/**
 * The my-text-to-morse-converter web component module.
 *
 * @author Maddelen Hedenström <mh222vu@student.lnu.se>
 * @version 1.0.0
 */

const template = document.createElement('template');
template.innerHTML = `
<style>
  #morse-code-container {
    background-color: white;
    padding: 20px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  #input-text {
    border: 1px solid #333;
    outline: none;
    border-radius: 5px;
  }

  button {
  padding: 10px 20px;
  margin: 20px;
  background-color: #199878;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #2e6e61;
}
</style>

<div id="morse-code">
  <div id="morse-code-container">
    <h1>Text to Morse Code Converter</h1>
    <textarea id="input-text" rows="10" cols="50" placeholder="Enter your text here..."></textarea>
    <button id="convert-button">Convert to Morse Code</button>
    <p>Morse Code: <span id="morse-code-text"></span></p>
  </div>
</div>
`

customElements.define('my-text-to-morse-converter',
  class extends HTMLElement {
    #morseCodeText

    constructor() {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#morseCodeText = this.shadowRoot.querySelector('#morse-code-text')
      this.inputText = this.shadowRoot.querySelector('#input-text')
      this.convertButton = this.shadowRoot.querySelector('#convert-button')

      this.convertButton.addEventListener('click', () => {
        this.convertToMorseCode()
      })
    }

    convertToMorseCode() {
      const text = this.inputText.value.trim().toLowerCase()
      const morseCode = this.textToMorse(text)
      this.#morseCodeText.textContent = morseCode
    }

    textToMorse(text) {
      const morseCodeMap = {
        'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.',
        'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---',
        'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---',
        'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-',
        'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--',
        'z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--',
        '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
        '9': '----.', ' ': ' '
      }

      return text.split('').map(char => morseCodeMap[char] || '').join(' ')
    }
  }
)