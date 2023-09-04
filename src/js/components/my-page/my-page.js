/**
 * The my-page web component module.
 *
 * @author Maddelen Hedenström <mh222vu@student.lnu.se>
 * @version 1.0.0
 */

import '../my-word-counter'

const IMG_URL = (new URL('images/bg.jpg', import.meta.url)).href

const template = document.createElement('template')
template.innerHTML = `
<style>
  * {
    margin: 0;
    padding: 0;
  }

  #my-page-container {
    width: 100vw;
    height: 100vh;
    background: url("${IMG_URL}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;
  }
  
  #menu {
    background-color: #f7f7f7;
    color: #fff;
    text-align: center;
    width: fit-content;
    margin: 10px auto;
    padding: 10px 30px;
    border-radius: 50px;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  }

</style>
<div id="my-page-container">
  <div id="menu">
    <a href="#my-word-counter">Word Counter</a>
  </div>
</div>
    
`

customElements.define('my-page',
  /**
   * Represents a page.
   */
  class extends HTMLElement {
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
      
      this.shadowRoot.querySelector('a[href="#my-word-counter"]').addEventListener('click', (event) => {
        event.preventDefault()
        console.log('Link clicked')
        const wordCounterElement = document.querySelector('my-word-counter')
        if (wordCounterElement) {
          wordCounterElement.openModal()
        }
      })
    }
  }
)
