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
            <div className='relative w-[250px] h-[300px] flex flex-col rounded-lg shadow-md gap-3'>
              <div
                  key={heroe.id}
                  className='px-3 py-1 absolute flex flex-col gap-4 overflow-hidden bottom-0 left-0 right-0 h-10 text-center cursor-default hover:h-full hover:text-white hover:text-2xl hover:bg-black/50 hover:rounded-lg'>
                
                <span className='font-bold text-center capitalize'>{heroe.name ? heroe.name : " - "}</span>

                <button className='px-3 py-2 text-base bg-blue-700 duration-300 hover:bg-blue-900 text-white rounded-lg'>
                  Edit
                </button>
                <button className='px-3 py-2 text-base bg-red-700 duration-300 hover:bg-red-900 text-white rounded-lg'>
                  Delete
                </button>

              </div>

              <img
                    src={heroe.image}
                    className='w-[250px] h-[250px] rounded-t-lg'
                    onError={(e) => e.target.src='https://placehold.co/480x640/555/FFF?text=?'}/>
            </div>
          )
        })}

        </div>
    </>
  )
}

export default Home