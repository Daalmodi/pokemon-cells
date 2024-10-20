import { CellsPageMixin as cellsPage } from '@cells/cells-page-mixin';
import { html, LitElement } from 'lit-element';
import { BbvaCoreIntlMixin as intl } from '@bbva-web-components/bbva-core-intl-mixin';


import '@cells-demo/demo-web-template/demo-web-template.js';

class PokemonPage extends intl(cellsPage(LitElement)) {
  static get is() {
    return 'pokemon-page';
  }

  constructor() {
    super();
    this.nombre = 'Pokemones';
    this.pokemones = [];
    this.makeRequest();
  }

  makeRequest() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((response)=> response.json())
      .then((data)=>this.renderPokemons(data.results));
  }
  renderPokemons(pokemones) {
    console.log(pokemones[0].name);
    this.pokemones = pokemones; // Almacena los Pokémones obtenidos
    this.requestUpdate(); // Solicita una actualización de la interfaz

  }

  render() {

    return html`
      <demo-web-template page-title="Pokemon">

      <div slot="app-main-content">
        <h1> ${this.nombre}</h1>
        <p>Lista de Pokémones:</p>
        <ul>
          ${this.pokemones.map((pokemon) => html`<li>${pokemon.name}</li>`)}
        </ul>

        
      </div">

      </demo-web-template">
      
    `;
  }
}
window.customElements.define(PokemonPage.is, PokemonPage);