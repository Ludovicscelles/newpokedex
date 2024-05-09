import PropTypes from "prop-types";

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

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
}

export default PokemonCard;
