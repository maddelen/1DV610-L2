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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: url("${IMG_URL}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;
  }

</style>
<div id="my-page-container">
<my-word-counter></my-word-counter>
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
      
    }
  }
)
