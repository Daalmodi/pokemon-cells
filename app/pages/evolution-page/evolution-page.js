import { CellsPageMixin as cellsPage } from '@cells/cells-page-mixin';
import { html, LitElement } from 'lit-element';
import { BbvaCoreIntlMixin as intl } from '@bbva-web-components/bbva-core-intl-mixin';

import '@cells-demo/demo-web-template/demo-web-template.js';
import '../../elements/UI/evolution-pokemon.js';
class Evolutionpage extends intl(cellsPage(LitElement)) {
  static get is() {
    return 'evolution-page';
  }

  constructor() {
    super();


  }


  render() {
    return html`
       <demo-web-template page-title="Evolution">
        <div slot="app-main-content">

            <h1> Evolution page works</h1>
            <evolution-pokemon></evolution-pokemon>
        </div>
       </demo-web-template ">
       
       `;
  }
}
window.customElements.define(Evolutionpage.is, Evolutionpage);