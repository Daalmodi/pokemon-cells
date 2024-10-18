import { CellsPageMixin as cellsPage } from '@cells/cells-page-mixin';
import { html, LitElement } from 'lit-element';
import { BbvaCoreIntlMixin as intl } from '@bbva-web-components/bbva-core-intl-mixin';


class PokemonPage extends intl(cellsPage(LitElement)) {
  static get is() {
    return 'pokemon-page';
  }
  constructor() {
    super();
    this.nombre = 'Daniel Alejandro Moya Diaz';
    this.makeRequest();
  }

  makeRequest() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((response)=> response.json())
      .then((data)=> this.renderPokemons(data.results));
  }
  renderPokemons(pokemones) {
    console.log(pokemones);

  }

  render() {

    return html`
        <h1> ${this.nombre}</h1>

    `;
  }
}
window.customElements.define(PokemonPage.is, PokemonPage);