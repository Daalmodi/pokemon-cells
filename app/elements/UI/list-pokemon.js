import { html, LitElement } from 'lit-element';
import '@bbva-web-components/bbva-web-panel-outstanding-opportunity/bbva-web-panel-outstanding-opportunity.js';
export class GetListPokemon extends LitElement {

  static get is() {
    return 'list-pokemon';
  }

  constructor() {
    super();
    this.pokemones = [];
    this.type = [];
    this.makeRequest();

  }

  makeRequest() {

    for (let index = 1; index <= 31; index++) {


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
          link="Link"
          slot="main"
          bg-img=${pokemon.sprites.other.dream_world.front_default}
        >
           Tipos : ${pokemon.types.map((type) => html` ${type.type.name} `)}
        </bbva-web-panel-outstanding-opportunity-item>
      `)}
    </div>
  `;
  }

}
customElements.define(GetListPokemon.is, GetListPokemon);