function PokemonCard({pokemon}) {
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
