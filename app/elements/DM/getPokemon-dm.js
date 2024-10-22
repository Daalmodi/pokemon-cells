

export const getPokemon = () =>{
  for (let index = 1; index <= 20; index++) {


    fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
      .then((response)=> response.json())
      .then((data)=>this.renderPokemons(data));
  }
};
