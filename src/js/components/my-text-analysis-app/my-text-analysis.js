/**
 * The my-text-analysis web component module.
 *
 * @author Maddelen Hedenström <mh222vu@student.lnu.se>
 * @version 1.0.0
 */

const template = document.createElement('template')
template.innerHTML = `
<style>
  @import url('https://fonts.googleapis.com/css2?family=Martian+Mono:wght@400;700&display=swap');

  #my-text-analysis {
    font-family: 'Martian Mono', monospace;
  }

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
    padding: 1em;
  }

  .error-message {
    color: red;
    font-weight: bold;
    margin-top: 5px;
  }

  #statistics-container {
    background-color: white;
    margin: 10px;
    padding: 20px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
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
  <div id="statistics-container">
  <p><h2>Other (random) stuff about your text: <span id="longest-word"></span></h2></p>
  <div id="character-statistics">
    <p>Uppercase Characters: <span id="uppercase-count">0</span></p>
    <p>Lowercase Characters: <span id="lowercase-count">0</span></p>
    <p>Digit Characters: <span id="digit-count">0</span></p>
    <p>Whitespace Characters: <span id="whitespace-count">0</span></p>
    <p>Special Characters: <span id="special-character-count">0</span></p>
  </div>
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
    #countStatistics

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
      this.#countStatistics = this.shadowRoot.querySelector('#count-statistics')
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
          this.#countStatistics.textContent = ''
        } else {
          this.#errorMessage.textContent = ''
          this.countWords()
          this.countCharacters()
          this.countSentences()
          this.findLongestWord(words)
          this.countCharactersStatistics(text)
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
        let longestWord = words[0] // Initialize with the first word

        for (let i = 1; i < words.length; i++) {
          if (words[i].length > longestWord.length) {
            longestWord = words[i]
          }
        }

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

    /**
     * Calculates character statistics for the input text and updates the displayed character count.
     *
     * @param {string} text - The input text to analyze.
     * @returns {object} - The character statistics.
     */
    countCharactersStatistics (text) {
      const characterStatistics = {
        uppercaseCount: 0,
        lowercaseCount: 0,
        digitCount: 0,
        whitespaceCount: 0,
        specialCharacterCount: 0,
        characterCount: 0
      }

      for (let i = 0; i < text.length; i++) {
        const char = text.charAt(i)

        if (/[A-Z]/.test(char)) {
          characterStatistics.uppercaseCount++
        } else if (/[a-z]/.test(char)) {
          characterStatistics.lowercaseCount++
        } else if (/\d/.test(char)) {
          characterStatistics.digitCount++
        } else if (/\s/.test(char)) {
          characterStatistics.whitespaceCount++
        } else {
          characterStatistics.specialCharacterCount++
        }

        characterStatistics.characterCount++ // Increment character count
      }

      // Update the displayed counts
      this.shadowRoot.querySelector('#uppercase-count').textContent = characterStatistics.uppercaseCount
      this.shadowRoot.querySelector('#lowercase-count').textContent = characterStatistics.lowercaseCount
      this.shadowRoot.querySelector('#digit-count').textContent = characterStatistics.digitCount
      this.shadowRoot.querySelector('#whitespace-count').textContent = characterStatistics.whitespaceCount
      this.shadowRoot.querySelector('#special-character-count').textContent = characterStatistics.specialCharacterCount

      return characterStatistics
    }
  }
)
