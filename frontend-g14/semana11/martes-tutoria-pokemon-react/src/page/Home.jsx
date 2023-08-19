import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

import Header from '../components/Header';
import PokemonList from '../components/PokemonList';

const Home = () => {
  const [pokemosList, setPokemosList] = useState([]);

  const fetchPokemons = async () => {

    const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=24");
    const data = await response.json();

    const results = data.results.map(result => {

      const id = result.url.split("/").at(6);
      const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
      return {
        name: result.name,
        id,
        image
      }
    });
    
    setPokemosList(results);
  }

  useEffect(() =>{

    fetchPokemons();
  }, [])

  return (

    <div className="w-full font-mono py-4">
      
      <PokemonList pokemons={pokemosList}/>
      
    </div>
  )
}

export default Home