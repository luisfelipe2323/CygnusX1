import {html, css} from 'lit-element';

import {PageDM} from '../utils/page-dm.js';

class DefaultPage extends PageDM {
  static get styles() {
      return css`
        .principal-container > *{s
          max-width: 600px;
          margin-left:auto;
          margin-right: auto;
        }
      `;
    }

    render() {
      return html`
        <section class="principal-container">
          <h2>Default</h2>
        </section>
      `;
    }
}

window.customElements.define('default-page', DefaultPage);
