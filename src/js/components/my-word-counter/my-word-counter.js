/**
 * The my-word-counter web component module.
 *
 * @author Maddelen Hedenström <mh222vu@student.lnu.se>
 * @version 1.0.0
 */

const template = document.createElement('template')
template.innerHTML = `
<style>

  #my-word-counter-container {
    background-color: white;
    padding: 20px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }

  #input-text {
    border: 1px solid #333;
    outline: none;
    border-radius: 5px;
  }
</style>

<div id="my-word-counter">
  <div id="my-word-counter-container">
    <h1>The word counter</h1>
    <textarea id="input-text" rows="10" cols="50" placeholder="Enter your text here..."></textarea>
    <p>Word Count: <span id="word-count">0</span></p>
  </div>
</div>
`

/*
 * Define custom element.
 */
customElements.define('my-word-counter',
  /**
   * Represents a page.
   */
  class extends HTMLElement {
    #wordCount

    /**
     * Creates an instance of the current type.
     */
    constructor() {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true));

      this.#wordCount = this.shadowRoot.querySelector('#word-count')
      this.inputText = this.shadowRoot.querySelector('#input-text')


      this.inputText.addEventListener('input', () => {
        this.countWords()
      })
    }

    countWords() {
      const text = this.inputText.value
      const words = text.split(/\s+/).filter(word => word !== '')
      const wordCount = words.length
      this.#wordCount.textContent = wordCount
    }

  })
