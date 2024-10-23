import { html, LitElement } from 'lit-element';
import '@bbva-web-components/bbva-web-panel-outstanding-opportunity/bbva-web-panel-outstanding-opportunity.js';
import { CellsPageMixin as cellsPage } from '@cells/cells-page-mixin';
import { BbvaCoreIntlMixin as intl } from '@bbva-web-components/bbva-core-intl-mixin';
export class GetEvolutionPokemon extends intl(cellsPage(LitElement)) {
  static get is() {
    return 'evolution-pokemon';
  }

  constructor() {
    super();
    this.pokemoEvolutions = [];
    this.evolution = [];

    this.pokemonId = parseInt(this.getCurrentRoute().params.id);
    this.getSpecies();
    this.urlEvolutionChain = null;
    this.datos = [];
    this.ids = [];
    this.obtenerinfo();

  }


  getSpecies() {


    fetch(`https://pokeapi.co/api/v2/pokemon-species/${this.pokemonId}`)
      .then((response)=> response.json())
      .then((data)=>this.getEvolutionChain(data));

  }

  getEvolutionChain(chain) {
    this.urlEvolutionChain = chain.evolution_chain.url;


    fetch(this.urlEvolutionChain)
      .then((response)=> response.json())
      .then((data)=>this.pokemonRenders(data));


  }

  pokemonRenders(pokemones) {

    const chain = pokemones.chain;
    const queue = [ chain ];

    while (queue.length > 0) {
      const species = queue.shift();
      const urlParts = species.species.url.split('/');
      const id = parseInt(urlParts[urlParts.length - 2]);
      this.datos.push({ nombre: species.species.name, url: species.species.url });
      this.ids.push(id);
      if (species.evolves_to) {
        queue.push(...species.evolves_to);
      }
    }

    this.getEvolution();

  }

  getEvolution() {

    this.ids.forEach((id) => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())
        .then((data) => this.renderPokemons(data));
    });

  }


  renderPokemons(pokemon) {

    this.pokemoEvolutions = [...this.pokemoEvolutions, pokemon];
    this.requestUpdate();

  }

  obtenerinfo() {


  }

  render() {
    return html`

    <div>
      ${this.pokemoEvolutions.map((pokemon) => html`
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
customElements.define(GetEvolutionPokemon.is, GetEvolutionPokemon);