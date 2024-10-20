import { html, LitElement } from 'lit-element';

export class SimpleGreeting extends LitElement {
  static get is() {
    return 'simple-greeting';
  }


  constructor() {
    super();
    this.name = 'Somebody';
  }

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
customElements.define(SimpleGreeting.is, SimpleGreeting);
