import { MyTextAnalysisModule } from '../my-text-analysis-module/my-text-analysis-module.js'

const template = document.createElement('template')
template.innerHTML = `
<style>
  @import url('https://fonts.googleapis.com/css2?family=Martian+Mono:wght@400;700&display=swap');

  #my-text-analysis {
    font-family: 'Martian Mono', monospace
  }

  #my-text-analysis-container {
    background-color: white;
    margin: 10px;
    padding: 20px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
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
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
  }

  #analyze-language {
    background-color: white;
    margin: 10px;
    padding: 20px;
    text-align: center;
    border-radius: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
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
    <p>Most Frequent Word: <span id="most-frequent-word"></span></p> <!-- Added this line -->
    <p class="error-message" id="error-message"></p>
  </div>
  <div id="statistics-container">
    <p><h2>Other (random) stuff about your text:</h2></p>
    <div id="character-statistics">
      <p>Uppercase Characters: <span id="uppercase-count">0</span></p>
      <p>Lowercase Characters: <span id="lowercase-count">0</span></p>
      <p>Digit Characters: <span id="digit-count">0</span></p>
      <p>Whitespace Characters: <span id="whitespace-count">0</span></p>
      <p>Special Characters: <span id="special-character-count">0</span></p>
      <p>Vowel Count: <span id="vowel-count">0</span></p>
      <p>Consonant Count: <span id="consonant-count">0</span></p>
    </div>
  </div>
  <div id="analyze-language">
    <h3>Well look at that...</h3>
    <div>
      <p>You are writing in: <span id="analyzed-language"></span></p>
    </div>
  </div>
</div>
`

/**
 * MyTextAnalysis is a custom element that analyzes text.
 */
class MyTextAnalysis extends HTMLElement {
  /**
   * Creates a new MyTextAnalysis custom element.
   */
  constructor () {
    super()

    this.textAnalysisModule = new MyTextAnalysisModule()

    this.attachShadow({ mode: 'open' })

    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.textarea = this.shadowRoot.getElementById('input-text')
    this.wordCount = this.shadowRoot.getElementById('word-count')
    this.characterCount = this.shadowRoot.getElementById('character-count')
    this.sentenceCount = this.shadowRoot.getElementById('sentence-count')
    this.longestWord = this.shadowRoot.getElementById('longest-word')
    this.mostFrequentWord = this.shadowRoot.getElementById('most-frequent-word')
    this.errorMessage = this.shadowRoot.getElementById('error-message')
    this.uppercaseCount = this.shadowRoot.getElementById('uppercase-count')
    this.lowercaseCount = this.shadowRoot.getElementById('lowercase-count')
    this.digitCount = this.shadowRoot.getElementById('digit-count')
    this.whitespaceCount = this.shadowRoot.getElementById('whitespace-count')
    this.specialCharacterCount = this.shadowRoot.getElementById('special-character-count')
    this.vowelCount = this.shadowRoot.getElementById('vowel-count')
    this.consonantCount = this.shadowRoot.getElementById('consonant-count')
    this.analyzedLanguage = this.shadowRoot.getElementById('analyzed-language')
  }

  /**
   * Called after the element is inserted into the DOM.
   */
  connectedCallback () {
    this.textarea.addEventListener('input', () => {
      const text = this.textarea.value

      const validationError = this.textAnalysisModule.validateUserInput(text)
      const characterCount = this.textAnalysisModule.countCharacters(text)
      const sentenceCount = this.textAnalysisModule.countSentences(text)
      const longestWord = this.textAnalysisModule.findLongestWord(text)
      const mostFrequentWord = this.textAnalysisModule.findMostFrequentWord(text)

      this.wordCount.textContent = text.split(/\s+/).filter(word => word !== '').length
      this.characterCount.textContent = characterCount
      this.sentenceCount.textContent = sentenceCount
      this.longestWord.textContent = longestWord
      this.mostFrequentWord.textContent = mostFrequentWord
      this.errorMessage.textContent = validationError.errorMessage

      const characterStatistics = {
        uppercaseCount: this.textAnalysisModule.countUppercase(text),
        lowercaseCount: this.textAnalysisModule.countLowercase(text),
        digitCount: this.textAnalysisModule.countDigits(text),
        whitespaceCount: this.textAnalysisModule.countWhitespace(text),
        specialCharacterCount: this.textAnalysisModule.countSpecialCharacters(text)
      }
      
      this.uppercaseCount.textContent = characterStatistics.uppercaseCount
      this.lowercaseCount.textContent = characterStatistics.lowercaseCount
      this.digitCount.textContent = characterStatistics.digitCount
      this.whitespaceCount.textContent = characterStatistics.whitespaceCount
      this.specialCharacterCount.textContent = characterStatistics.specialCharacterCount
      this.vowelCount.textContent = this.textAnalysisModule.countVowels(text)
      this.consonantCount.textContent = this.textAnalysisModule.countConsonants(text)
      this.analyzedLanguage.textContent = this.textAnalysisModule.analyzeLanguage(text)
      
    })
  }
}

customElements.define('my-text-analysis', MyTextAnalysis)
