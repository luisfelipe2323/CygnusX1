import {html} from 'lit-element';
import {PageDM} from '../utils/page-dm.js';

class HomePage extends PageDM {
  render() {
    return html`
      <section>
        <h2>Home</h2>
      </section>
    `;
  }
}

window.customElements.define('home-page', HomePage);
