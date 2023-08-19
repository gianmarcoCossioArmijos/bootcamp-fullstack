import React from 'react'
import { RouterProvider } from 'react-router-dom'

import PrimaryRouter from '../src/routes/PrymaryRouter'

const App = () => {

  return (
    <RouterProvider router={PrimaryRouter} />
  )
}

export default App