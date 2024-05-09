import PropTypes from "prop-types";

function Navbar({ handleClick, pokemonList, pokemonIndex }) {
  if (pokemonIndex === 3) {
    alert("pika pika !!");
  }
  return (
    <section>
      {pokemonList.map((element, index) => (
        <button
          className="button"
          key={index}
          onClick={() => handleClick(index)}
        >
          {element.name}
        </button>
      ))}
    </section>
  );
}

Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  pokemonIndex: PropTypes.number.isRequired,
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
      map: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
