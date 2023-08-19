import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './page/Home'
import Header from './components/Header'
import Pokemon from './page/Pokemon'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header>
          <Routes>

            <Route path="/" element ={<Home/>} />
            <Route path="/pokemon" element ={<Pokemon/>} />

            </Routes>
          </Header>
      </BrowserRouter>
    </>
  )
}

export default App