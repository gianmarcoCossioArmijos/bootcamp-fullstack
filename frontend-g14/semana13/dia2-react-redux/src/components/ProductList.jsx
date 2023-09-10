import { ImageList } from '@mui/material'
import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({ products }) => {
  return (
    <ImageList>

        {products && products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}

    </ImageList>
  )
}

export default ProductList