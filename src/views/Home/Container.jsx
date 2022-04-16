import React, {useEffect, useState} from 'react'

import { actions } from '../../ducks/Products'
import { useDispatch, useSelector } from 'react-redux'

import Home from '.'

export default function Container() {
    const [avaliableProducts, setAvaliableProducts] = useState([])
    const dispatch = useDispatch()

    const products = useSelector(state => state.productsReducer.products)
    const productsInCart = useSelector(state => state.productsReducer.productsInCart)
    const loading = useSelector(state => state.productsReducer.loading)
    const error = useSelector(state => state.productsReducer.error)
    const getProductList = actions.fetchProductsList
    
    // Verificação para não listar produtos já selecionados
    const getAvaliableProducts = (products, productsInCart) => {
        const productsIdInCart = productsInCart.map(({id}) => id)
        return products.filter(({id}) => !productsIdInCart.includes(id))
    }

    const handleAddProduct = (product) => dispatch(actions.addProductsToCart(product))

    useEffect(() => {
        dispatch(getProductList())
        .then(({payload}) => {
            if (payload === undefined) return
            return getAvaliableProducts(payload, productsInCart)
        })
        .then(setAvaliableProducts)

        return () => {
            setAvaliableProducts([])
        }
    }, [])

    useEffect(() => {
        setAvaliableProducts(getAvaliableProducts(products, productsInCart))
    }, [productsInCart])

    return <Home 
              loading={loading}
              products={avaliableProducts}
              error={error}
              handleAddProduct={handleAddProduct}
            />
}