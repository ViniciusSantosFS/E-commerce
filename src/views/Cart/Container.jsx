import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../ducks/Products'
import Cart from '.'

export default function Container() {
    const dispatch = useDispatch()
    const productsInCart =  useSelector(state => state.productsReducer.productsInCart)

    const handleRemoveProductOfCart = (product) => {
        dispatch(actions.removeProductsInCart(product.id))
    }

    const handleClearCart = () => dispatch(actions.clearProductsInCart())

    return <Cart 
            productsInCart={productsInCart} 
            handleRemoveProductOfCart={handleRemoveProductOfCart}
            handleClearCart={handleClearCart}
            />
}