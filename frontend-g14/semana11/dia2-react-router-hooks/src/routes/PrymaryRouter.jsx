
import { createBrowserRouter } from 'react-router-dom'

import PrimaryLayout from '../layouts/PrimaryLayout'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Register from '../pages/Register'
import PokemonDetail from '../pages/PokemonDetail'
import ErrorPage from '../pages/ErrorPage'

const PrimaryRouter = createBrowserRouter([
    {
      path: "/",
      element: <PrimaryLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/pokemon/:id",
          element: <PokemonDetail />
        }
      ]
    }
  ])

  export default PrimaryRouter