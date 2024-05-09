const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function PokemonCard() {
  const pokemon = pokemonList[1];
  return (
    <section>
      <figure>
        {pokemon.imgSrc ? (
          <img
            className="imageCard"
            src={pokemon.imgSrc}
            alt={pokemon.name}
          ></img>
        ) : (
          "???"
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </section>
  );
}

export default PokemonCard;
