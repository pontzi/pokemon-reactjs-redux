function currentData(props) {
  if (props.data.length > 0) {
    let pokemon = "";
    const name = props.match.params.pokemonName.toLowerCase();
    const pokemonArray = props.data.filter(
      (pokemon) => pokemon.name.toLowerCase() === name
    );
    if (pokemonArray.length === 0) {
      return;
    }
    pokemon = pokemonArray[0];
    const currentData = {
      type: pokemon.types[0].type.name,
      id: pokemon.id,
      weight: pokemon.weight,
      name: pokemon.name,
    };
    return currentData;
  }
}

export default currentData;
