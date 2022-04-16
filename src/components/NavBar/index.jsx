import React from 'react'
import {  AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'

const WHITE = "#FFFFFF"

export default function NavBar() {
    return (
        <AppBar position='static'>
                <Toolbar sx={{justifyContent: 'space-between'}}>
                    <Typography variant="h5">
                        E-Commerce
                    </Typography>
                    <div>
                        <Link to="/carrinho" style={{ color: WHITE }}>
                            <IconButton
                                size="large"
                                color="inherit"
                            >
                                <ShoppingCartIcon />
                            </IconButton>
                        </Link>
                    </div>
                </Toolbar>
        </AppBar>
            
    )
}