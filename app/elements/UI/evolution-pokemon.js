import { html, LitElement } from 'lit-element';
export class GetEvolutionPokemon extends LitElement {
  static get is() {
    return 'evolution-pokemon';
  }

  constructor() {
    super();
    this.pokemones = [];
    this.pokemonId = 5;
    this.getSpecies();
    this.urlEvolutionChain = null;

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
    const datos = [];
    const ids = [];
    const chain = pokemones.chain;
    const queue = [ chain ];

    while (queue.length > 0) {
      const species = queue.shift();
      const urlParts = species.species.url.split('/');
      const id = parseInt(urlParts[urlParts.length - 2]);
      datos.push({ nombre: species.species.name, url: species.species.url });
      ids.push(id);
      if (species.evolves_to) {
        queue.push(...species.evolves_to);
      }
    }

    console.log(datos);
    console.log(ids);

  }
  render() {
    return html`

        <h1>Funciona</h1>
      `;
  }

}
customElements.define(GetEvolutionPokemon.is, GetEvolutionPokemon);