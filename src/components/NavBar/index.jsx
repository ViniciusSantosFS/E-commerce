import React from 'react'
import {  AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Link } from 'react-router-dom'
import { Box } from '@mui/system';
import { COLORS } from '../../global/colors'

export default function NavBar({itensInCart}) {
    return (
        <AppBar position='static'>
                <Toolbar sx={{justifyContent: 'space-between'}}>
                    <Link to="/" style={{ color: COLORS.white, textDecoration: 'none' }}>
                        <Typography variant="h5">
                            E-commerce
                        </Typography>
                    </Link>
                    <div>
                        <Link to="/carrinho" style={{ color: COLORS.white }}>
                            <IconButton
                                size="large"
                                color="inherit"
                            >
                                <ShoppingCartIcon />
                                <Box component="span">{itensInCart}</Box>
                            </IconButton>
                        </Link>
                    </div>
                </Toolbar>
        </AppBar>
            
    )
}