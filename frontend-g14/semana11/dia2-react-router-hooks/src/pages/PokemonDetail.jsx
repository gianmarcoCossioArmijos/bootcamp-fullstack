import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const PokemonDetail = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);

    const getPokemon = async (id) => {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data);
    }

    useEffect(() => {

        getPokemon(id);
    }, [])

    if(!pokemon) return(
        <section className='h-96 flex justify-center text-center text-white'>
        
            <h1 className='self-center text-4xl'>Not Found Pokemon :(</h1>

        </section>
    )

  return (
    <section className='px-12 py-8'>

        <div className='flex gap-2 m-auto  bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 border-2 border-yellow-300 rounded-lg text-center'>

            <img
                className="mx-auto"
                src={pokemon.sprites.other['official-artwork'].front_default}
                alt={pokemon.name} />

            <h1 className="mx-auto font-bold text-3xl">{pokemon?.name}</h1>

            <span>{pokemon.id}</span>

        </div>

    </section>
  )
}

export default PokemonDetail