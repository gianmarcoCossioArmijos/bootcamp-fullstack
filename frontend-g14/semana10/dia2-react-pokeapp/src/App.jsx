import { useEffect, useState } from 'react'
import PokemonsList from './components/PokemonsList';
import Header from './components/Header';

function App() {
  const [pokemons, setPokemons] = useState({});

  useEffect( () => {

    const fetchPokemos = async () => {

      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await response.json();
      setPokemons(data);
    }

    fetchPokemos();
  }, [])

  return (
    <>
      <Header title={"Pokedex App"} />

      <PokemonsList pokemons={pokemons} />
    </>
  )
}

export default App
