import { html, LitElement } from 'lit-element';

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

    for (let index = 1; index <= 20; index++) {


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
          ${this.pokemones.map((pokemon) => html
  `<h3>${pokemon.name}</h3>
  <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
  <p>Tipos: </p>
    <div>
      ${pokemon.types.map(type => html`
        <li>${type.type.name}</li>
      `)}
    </div>

          `)}
        </div>`;
  }

}
customElements.define(GetListPokemon.is, GetListPokemon);