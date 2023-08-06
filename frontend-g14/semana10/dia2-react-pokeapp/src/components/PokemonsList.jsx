import React from 'react'

const PokemonsList = ({ pokemons }) => {

  return (
    <>
        {pokemons.results?.map((pokemon) => {

            const id = pokemon.url.split("/").at(6);
            const pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

            return (
                <article
                    className='p-4 m-2 border'
                    key={pokemon.url}>
                    
                    <div>
                        <h3><strong></strong></h3>
                        <h3>{pokemon.name}</h3>
                    </div>

                    <div className='flex gap-1'>
                        <button className='p-1 rounded-lg bg-green-300'>Grass</button>
                        <button className='p-1 rounded-lg bg-green-300'>Grass</button>
                    </div>

                    <img className='m-auto'
                        src={pokeImage} alt={pokemon.name} />
                </article>
            )
        })}
    </>
  )
}

export default PokemonsList