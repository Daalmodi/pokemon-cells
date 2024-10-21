import { html, LitElement } from 'lit-element';

export class SimpleGreeting extends LitElement {
  static get is() {
    return 'simple-greeting';
  }


  constructor() {
    super();
    this.name = 'Escoja a su Pokemon favorito';
  }

  render() {
    return html`<p>${this.name}!</p>`;
  }
}
customElements.define(SimpleGreeting.is, SimpleGreeting);
