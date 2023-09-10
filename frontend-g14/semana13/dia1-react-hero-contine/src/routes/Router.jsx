import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import NewHero from '../pages/NewHero'

import LayoutBase from '../layouts/LayoutBase'
import Login from '../pages/Login'

const Router = () => {
  return (
    <>
        <BrowserRouter>
          <LayoutBase>
            <Routes>

              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/new-hero' element={<NewHero />} />
            
            </Routes>
          </LayoutBase>
        </BrowserRouter>
    </>
  )
}

export default Router