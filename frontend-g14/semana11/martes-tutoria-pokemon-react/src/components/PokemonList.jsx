import React from 'react'
import { Link } from 'react-router-dom'

const PokemonList = ({ pokemons }) => {
  return (

    <div className="mx-12 my-4 flex flex-wrap gap-4 justify-between">

        {pokemons.map(pokemon => {

            return (
                <div 
                    key={pokemon.id}
                    className='w-52 h-52 p-2 flex flex-col gap-2 bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 border-2 border-yellow-300 rounded-lg hover:animate-jump hover:animate-duration-500 hover:animate-ease-in hover:text-blue-900'
                    >

                    <img
                        className='h-3/4 w-auto mx-auto'
                        src={pokemon.image} alt={pokemon.name} />

                    <button className='py-1 bg-white rounded-full border border-yellow-300 text-center font-bold capitalize'>
                        <Link to="/pokemon">
                            {pokemon.name}
                        </Link>
                    </button>
                    
                </div>
            )
        })}

    </div>
  )
}

export default PokemonList