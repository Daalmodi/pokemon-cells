import { CellsPageMixin as cellsPage } from '@cells/cells-page-mixin';
import { html, LitElement } from 'lit-element';
import { BbvaCoreIntlMixin as intl } from '@bbva-web-components/bbva-core-intl-mixin';

import '../../elements/UI/simple-greeting.js';
import '../../elements/UI/list-pokemon.js';
import '@cells-demo/demo-web-template/demo-web-template.js';
import '@bbva-web-components/prueba-app';

class PokemonPage extends intl(cellsPage(LitElement)) {
  static get is() {
    return 'pokemon-page';
  }

  constructor() {
    super();
    this.nombre = 'Pokemones';

  }

  onPageEnter() {
    console.log('Entro');


  }
  render() {

    return html`
      <demo-web-template page-title="Pokemon">

      <div slot="app-main-content">
        <h1> ${this.nombre}</h1>
        <simple-greeting></simple-greeting> 
        <p>Lista de Pokémones:</p>

        <list-pokemon></list-pokemon>
        
      </div">

      </demo-web-template">
      
    `;
  }
}
window.customElements.define(PokemonPage.is, PokemonPage);