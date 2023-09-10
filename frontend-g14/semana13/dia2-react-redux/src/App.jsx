import React, { useEffect, useState } from 'react'

import { Box, Container } from '@mui/material'

import Header from './components/Header'
import ProductList from './components/ProductList'

import axios from 'axios'

const App = () => {
  const [products, setProducts] = useState();

  const fetchProducts = async () => {

    const baseUrl = 'https://dummyjson.com/products/';
    const response = await axios.get(baseUrl);
    return response.data;
  }

  useEffect(() => {

    fetchProducts()
      .then(data => setProducts(data.products));
  }, [])

  return (
    <>
      
      <Container>

        <Box sx={{ my:4 }}>
          <Header />
        </Box>

        <Box>
          <ProductList products={products} />
        </Box>

      </Container>

    </>
  )
}

export default App