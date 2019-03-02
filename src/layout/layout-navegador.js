import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
* @customElement
* @polymer
*/
class LayoutNavegador extends PolymerElement {
 static get template() {
   return html`
     <style>
       :host {
         display: block;
         font-family: sans-serif;
       }
       nav {
         font-size: 0.9em;
       }
     </style>
     <nav>
     <a href="#">Enlace 1</a> |
     <a href="#">Enlace 2</a>
     </nav>
   `;
 }
 static get properties() {
   return {
     prop1: {
       type: String,
       value: 'layout-navegador'
     }
   };
 }
}

window.customElements.define('layout-navegador', LayoutNavegador);