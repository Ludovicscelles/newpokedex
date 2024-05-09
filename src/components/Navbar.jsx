import PropTypes from "prop-types";

function Navbar({ handleClick, pokemonList }) {
  return (
    <section>
    {pokemonList.map((element, index) => (
        <button className="button" key={index} onClick={() => handleClick(index)}>{element.name}</button>
   
    ))}
    </section>
  );
}


Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  pokemonList: PropTypes.arrayOf(
  PropTypes.shape ({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
    map: PropTypes.string.isRequired
  })).isRequired,
};

export default Navbar;


