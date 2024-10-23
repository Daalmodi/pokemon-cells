import { html, LitElement } from 'lit-element';
import { CellsPageMixin as cellsPage } from '@cells/cells-page-mixin';
import { BbvaCoreIntlMixin as intl } from '@bbva-web-components/bbva-core-intl-mixin';
import '@bbva-web-components/bbva-web-panel-outstanding-opportunity/bbva-web-panel-outstanding-opportunity.js';
import '@bbva-web-components/bbva-web-button-default/bbva-web-button-default.js';

export class GetListPokemon extends intl(cellsPage(LitElement)) {

  static get is() {
    return 'list-pokemon';
  }

  constructor() {
    super();
    this.pokemones = [];
    this.type = [];
    this.id = {};
    this.selectedId = null;
    this.makeRequest();

  }


  connectedCallback() {
    super.connectedCallback();
    this.pokemones = [];
    this.type = [];
    this.id = {};
    this.selectedId = null;
    this.makeRequest();
  }
  makeRequest() {

    for (let index = 1; index <= 8; index++) {

      console.log(index);

      fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        .then((response)=> response.json())
        .then((data)=>this.renderPokemons(data));
    }
  }
  renderPokemons(pokemon) {
    this.pokemones = [...this.pokemones, pokemon]; // Almacena los Pokémones obtenidos
    this.requestUpdate(); // Solicita una actualización de la interfaz


  }

  render() {
    return html`
    <div>
      ${this.pokemones.map((pokemon) => html`
        <bbva-web-panel-outstanding-opportunity-item
          heading=${pokemon.name}
          heading-icon=""
          
          slot="main"
          bg-img=${pokemon.sprites.other.dream_world.front_default}
        >
           Tipos : ${pokemon.types.map((type) => html` ${type.type.name} `)}
           id : ${pokemon.id}

          
        </bbva-web-panel-outstanding-opportunity-item>
        <bbva-web-button-default
          aria-controls="${this._uniqueId}"
          aria-expanded="${this.showForm}"
          id="access"
          class="login"
          size="l"
          slot="login-desktop"
          variant="positive"
          @click="${() => this.handleButtonClick(pokemon.id)}}"
        > Evolucion </bbva-web-button-default>
      `)}
    </div>
  `;
  }


  handleButtonClick(id) {

    this.navigate('evolution', { id });
    this.connectedCallback();

  }
}
customElements.define(GetListPokemon.is, GetListPokemon);