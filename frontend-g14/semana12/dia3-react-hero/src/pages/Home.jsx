import React, { useEffect, useState } from 'react'

import { useHero } from '../hooks/useHero.js'

const Home = () => {
  const [heroes, setHeroes] = useState([]);

  const { getHeros } = useHero();

  useEffect(() => {

    getHeros()
      .then(setHeroes)
  }, [])

  return (
    <>
        <div className='p-4 min-h-[500px] flex flex-wrap gap-2'>

        {heroes.map(heroe => {
          return (
            <div
                key={heroe.id}
                className='w-[250px] h-[300px] flex flex-col rounded-lg border-2 border-slate-300 gap-3'>
              
              <img src={heroe.image} className='w-[250px] h-[250px] rounded-t-lg'/>
              <span className='font-bold text-center capitalize'>{heroe.name}</span>

            </div>
          )
        })}

        </div>
    </>
  )
}

export default Home