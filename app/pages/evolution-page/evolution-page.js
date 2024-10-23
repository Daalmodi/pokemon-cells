import { CellsPageMixin as cellsPage } from '@cells/cells-page-mixin';
import { html, LitElement } from 'lit-element';
import { BbvaCoreIntlMixin as intl } from '@bbva-web-components/bbva-core-intl-mixin';
import '@bbva-web-components/bbva-web-button-default/bbva-web-button-default.js';
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
          <bbva-web-button-default
            @click="${this.returnPage}"
            > Volver </bbva-web-button-default>
        </div>

       </demo-web-template ">

       `;
  }


  returnPage() {
    console.log('Regresar');
    this.navigate('pokemon');
    window.location.reload();

  }
}
window.customElements.define(Evolutionpage.is, Evolutionpage);