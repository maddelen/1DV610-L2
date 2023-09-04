/**
 * The my-word-counter web component module.
 *
 * @author Maddelen Hedenström <mh222vu@student.lnu.se>
 * @version 1.0.0
 */

const template = document.createElement('template')
template.innerHTML = `
<style>
 .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    justify-content: center;
    align-items: center;
  }

  #my-word-counter-container {
    background-color: #cce0ff;
    padding: 20px;
    text-align: center;
  }

</style>

<div class="modal-overlay" id="my-word-counter">
  <div id="my-word-counter-container">
    <h1>Word Count</h1>
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
    #modalOverlay

    /**
     * Creates an instance of the current type.
     */
    constructor() {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true));

      this.#wordCount = this.shadowRoot.querySelector('#word-count')
      this.inputText = this.shadowRoot.querySelector('#input-text')
      this.#modalOverlay = document.createElement('div')
      this.#modalOverlay = this.shadowRoot.querySelector('.modal-overlay')
      this.#modalOverlay.className = 'modal-overlay'

      this.inputText.addEventListener('input', () => {
        this.countWords()
      })

      document.body.appendChild(this.#modalOverlay)
      this.#modalOverlay.appendChild(this)
    }

    countWords() {
      const text = this.inputText.value
      const words = text.split(/\s+/).filter(word => word !== '')
      const wordCount = words.length
      this.#wordCount.textContent = wordCount
    }

    openModal() {
      this.#modalOverlay.style.display = 'flex'
    }

    closeModal() {
      this.#modalOverlay.style.display = 'none'
    }
  })
