import React, {useEffect} from 'react'

import { actions } from '../../ducks/Products'
import { useDispatch, useSelector } from 'react-redux'

import Home from '.'

export default function Container() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.productsReducer.products)
    const loading = useSelector(state => state.productsReducer.loading)
    const error = useSelector(state => state.productsReducer.error)

    const getProductList = actions.fetchProductsList
    
    useEffect(() => { dispatch(getProductList()) }, [])

    return <Home loading={loading} products={products} error={error}/>
}