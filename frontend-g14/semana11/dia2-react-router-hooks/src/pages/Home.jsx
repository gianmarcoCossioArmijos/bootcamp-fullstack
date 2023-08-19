import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  const [pokemonList, setPokemonList] = useState([])

  const fetchPokemons = async() => {

    const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");
    const data = await response.json();
    console.log(data.results);
    setPokemonList(data.results);
  }

  useEffect(() => {

    fetchPokemons();
  }, [])

  return (
    <div className='px-4 py-5 flex justify-evenly flex-wrap gap-4 font-mono'>
      {
        pokemonList.map(pokemon => {

          const id = pokemon.url.split("/").at(6);

          return (
              <article
                    key={id}
                    className='w-52 h-52 p-2 flex flex-col gap-2 rounded-lg bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 border-2 border-yellow-300 hover:text-blue-900'>

                <img
                    className='h-3/4 w-auto mx-auto'
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={pokemon.name} />

                <Link
                      className='py-1 text-center font-bold text-lg bg-white hover:bg-sky-200 border-2 border-blue-950 text-blue-950 rounded-full'
                      to={`pokemon/${id}`}
                      key={id}>
                  <button>
                    {pokemon.name}
                  </button>
                </Link>
                
              </article>
          )
        })
      }
    </div>
  )
}

export default Home