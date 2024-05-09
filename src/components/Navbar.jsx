import PropTypes from "prop-types";

function Navbar({
  handleClickNext,
  handleClickPrevious,
  pokemonIndex,
  pokemonList,
}) {
  return (
    <section>
      {pokemonIndex > 0 ? (
        <button className="button" onClick={handleClickPrevious}>
          Previous
        </button>
      ) : null}
      <br />
      {pokemonIndex < pokemonList.length - 1 ? (
        <button className="button" onClick={handleClickNext}>
          Next
        </button>
      ) : null}
    </section>
  );
}

Navbar.propTypes = {
  handleClickNext: PropTypes.func.isRequired,
  handleClickPrevious: PropTypes.func.isRequired,
  pokemonIndex: PropTypes.number.isRequired,
  pokemonList: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
    length: PropTypes.number.isRequired,
  }).isRequired,
};

export default Navbar;
