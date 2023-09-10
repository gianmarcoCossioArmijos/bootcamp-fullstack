import { Button, ImageListItem, ImageListItemBar } from '@mui/material'
import React from 'react'

import AddIcon from '@mui/icons-material/Add'

import { useDispatch } from 'react-redux'
import { addProductToCart } from '../store/cart/cartSlice'

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = (product) => {

    dispatch(addProductToCart(product));
  }

  return (
    <ImageListItem>

        <img
            src={product.thumbnail}
            alt={product.title}
            loading='lazy' />

            <ImageListItemBar
                    title={product.title}
                    subtitle={product.price}
                    actionIcon={
                        <Button
                            variant='contained'
                            color='success'
                            onClick={() => addToCart(product)}
                            sx={{marginRight: 2}}>
                            <AddIcon/>
                        </Button>
                    }>

            </ImageListItemBar>

    </ImageListItem>
  )
}

export default ProductItem