/**
 * The my-text-analysis web component module.
 *
 * @author Maddelen Hedenström <mh222vu@student.lnu.se>
 * @version 1.0.0
 */

const template = document.createElement('template')
template.innerHTML = `
<style>
  #my-text-analysis-container {
    background-color: white;
    margin: 10px;
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

  .error-message {
    color: red;
    font-weight: bold;
    margin-top: 5px;
  }
</style>

<div id="my-text-analysis">
  <div id="my-text-analysis-container">
    <h1>The text analysis</h1>
    <textarea id="input-text" rows="10" cols="50" placeholder="Enter your text here..."></textarea>
    <p>Word Count: <span id="word-count">0</span></p>
    <p>Character Count: <span id="character-count">0</span></p>
    <p>Sentence Count: <span id="sentence-count">0</span></p>
    <p>Longest Word: <span id="longest-word"></span></p>
    <p class="error-message" id="error-message"></p>
  </div>
</div>
`

/*
 * Define custom element.
 */
customElements.define(
  'my-text-analysis',
  /**
   * Represents a text analysis program.
   */
  class extends HTMLElement {
    #wordCount
    #characterCount
    #sentenceCount
    #longestWord
    #errorMessage

    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      this.#wordCount = this.shadowRoot.querySelector('#word-count')
      this.#characterCount = this.shadowRoot.querySelector('#character-count')
      this.#sentenceCount = this.shadowRoot.querySelector('#sentence-count')
      this.#longestWord = this.shadowRoot.querySelector('#longest-word')
      this.#errorMessage = this.shadowRoot.querySelector('#error-message')
      this.inputText = this.shadowRoot.querySelector('#input-text')

      this.inputText.addEventListener('input', () => {
        this.validateInput()
      })
    }

    /**
     * Validates the input text for invalid characters and word count limits.
     * If the input contains invalid characters or exceeds the word limit, appropriate error messages are displayed.
     * Otherwise, it calculates and displays word count, character count, sentence count. and the longest word.
     */
    validateInput () {
      const text = this.inputText.value

      // Check if the text contains < and > characters using a regex pattern.
      const invalidCharacterPattern = /[<>]/

      if (invalidCharacterPattern.test(text)) {
        this.#errorMessage.textContent = 'The characters < and > are not allowed'
        this.#wordCount.textContent = 0
        this.#characterCount.textContent = 0
        this.#sentenceCount.textContent = 0
        this.#longestWord.textContent = ''
      } else {
        // Calculate the word count.
        const words = text.split(/\s+/).filter(word => word !== '')
        const wordCount = words.length

        if (wordCount > 2000) {
          this.#errorMessage.textContent = 'Text cannot exceed 2000 words.'
          this.#wordCount.textContent = 0
          this.#characterCount.textContent = 0
          this.#sentenceCount.textContent = 0
          this.#longestWord.textContent = ''
        } else {
          this.#errorMessage.textContent = ''
          this.countWords()
          this.countCharacters()
          this.countSentences()
          this.findLongestWord(words)
        }
      }
    }

    /**
     * Finds the longest word in the input text.
     *
     * @param {string[]} words - Array of words in the input text.
     */
    findLongestWord (words) {
      if (words.length === 0) {
        this.#longestWord.textContent = ''
      } else {
        const longestWord = words.reduce((longest, current) => {
          return current.length > longest.length ? current : longest
        }, '')

        this.#longestWord.textContent = longestWord
      }
    }

    /**
     * Counts the number of words in the input text and updates the displayed word count.
     */
    countWords () {
      const text = this.inputText.value
      const words = text.split(/\s+/).filter(word => word !== '')
      const wordCount = words.length
      this.#wordCount.textContent = wordCount
    }

    /**
     * Counts the number of characters in the input text and updates the displayed character count.
     */
    countCharacters () {
      const text = this.inputText.value
      const characterCount = text.length
      this.#characterCount.textContent = characterCount
    }

    /**
     * Counts the number of sentences in the input text and updates the displayed sentence count.
     */
    countSentences () {
      const text = this.inputText.value
      const sentences = text.split(/[.!?]+/).filter(sentence => sentence !== '')
      const sentenceCount = sentences.length
      this.#sentenceCount.textContent = sentenceCount
    }
  }
)
