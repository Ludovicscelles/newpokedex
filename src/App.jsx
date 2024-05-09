import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import Navbar from "./components/Navbar";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClickPrevious = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  return (
    <div className="card">
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <Navbar
        handleClickPrevious={handleClickPrevious}
        handleClickNext={handleClickNext}
        pokemonList={pokemonList}
        pokemonIndex={pokemonIndex}
      />
    </div>
  );
}

export default App;
