const getAllPokemonData = async() => {
    const pokemon = await fetch("https://raw.githubusercontent.com/anapaulaoliva/GDL004-data-lovers/master/src/data/pokemon/pokemon.json");
    return pokemon;
}
export default getAllPokemonData;