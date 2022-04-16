import React from 'react'
import { BrowserRouter, Routes as Switch, Route} from 'react-router-dom'
import { useSelector } from 'react-redux'

import { BottomNavigation } from '@mui/material'
import { COLORS } from './global/colors'

import Home from './views/Home/Container'
import Cart from './views/Cart/Container'
import NavBar from './components/NavBar'

const styles = {
    stickToBottom: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
      backgroundColor: COLORS.blue
    },
};

export default function Routes() {
    const productsInCart = useSelector(state => state.productsReducer.productsInCart)
    return (
        <BrowserRouter>
            <NavBar itensInCart={productsInCart.length}/>
            <Switch>
                <Route path='/' element={<Home />}/>
                <Route path='/carrinho' element={<Cart />}/>
            </Switch>
            <BottomNavigation sx={styles.stickToBottom} />
        </BrowserRouter>
    )
}