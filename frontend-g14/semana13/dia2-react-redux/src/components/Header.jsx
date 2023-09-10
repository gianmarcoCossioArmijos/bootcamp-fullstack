import { AppBar, Avatar, Badge, Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete'

import { removeProductFromCart } from '../store/cart/cartSlice.js'

const Header = () => {
    const [show, setshow] = useState(false);

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const removeProduct = (id) => {

        dispatch(removeProductFromCart(id));
    }

  return (
    <AppBar position='static'>
        <Container maxWidth="xl">
            <Toolbar disableGutters>

                <Typography
                    variant='h5'
                    sx={ {flexGrow: 1} }>
                    App
                </Typography>

                <Box sx={ {flexGrow: 0} }>

                    <Badge badgeContent={cart.length} color="error">
                        <Button
                            variant='contained'
                            color='warning'
                            onClick={() => setshow(true)}>
                            cart
                        </Button>

                        <Drawer
                            anchor='right'
                            open={show}
                            onClose={() => setshow(false)}
                            sx={{
                                width: 360  ,
                                flexShrink: 0,
                                '& .MuiDrawer-paper': {
                                    width: 360  ,
                                    boxSizing: 'border-box',
                                }
                            }}>

                            <Typography variant='h6' sx={{ padding : 2 }}>
                                Shopping Cart
                            </Typography>
                                <List>

                                    {cart.map(product => {
                                        return (
                                            <ListItem
                                                disablePadding
                                                key={product.id}
                                                secondaryAction={

                                                    <IconButton edge="end">
                                                        <DeleteIcon onClick={() => removeProduct(product.id)}/>
                                                    </IconButton>

                                                }>
                                                <ListItemButton>

                                                    <ListItemAvatar>
                                                        <Avatar src={product.thumbnail} />
                                                    </ListItemAvatar>

                                                    <ListItemText
                                                            primary={product.title}
                                                            secondary={product.price} />

                                                </ListItemButton>
                                            </ListItem>
                                        )
                                    })}

                                </List>

                        </Drawer>

                    </Badge>

                </Box>

            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Header