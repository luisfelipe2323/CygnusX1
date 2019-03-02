import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../layout/layout-navegador.js';

/**
 * @customElement
 * @polymer
 */
class GastronomiaApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'gastronomia-app'
      }
    };
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
          font-family: sans-serif;
        }
        h1 {
          font-size: 1.2em;
          color: orangered;
        }
      </style>
      <h1>Mi primera aplicación con Polymer</h1>
      <layout-navegador></layout-navegador>
    `;
  }
  
}



window.customElements.define('gastronomia-app', GastronomiaApp);
