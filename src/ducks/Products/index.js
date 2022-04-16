import { createAction, createReducer } from "@reduxjs/toolkit"
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../services/axios'

const initialState = {
    products: [],
    productsInCart: [],
    loading: false,
    error: ''
}

const fetchProductsList = createAsyncThunk('',
    async () => {
        const products = await axios.get()
        return products.data
    }
)

const addProductsToCart = createAction('product/addToCart')


const productsReducer = createReducer(initialState, (builder) => {
    builder.addCase(fetchProductsList.pending, (state) => {
        state.loading = true
    })
    .addCase(fetchProductsList.fulfilled, (state, action) => {
        state.products = action.payload
        state.loading = false
    })
    .addCase(fetchProductsList.rejected, (state) => {
        state.error = 'Algo deu errado ao listar os produtos, tente novamente mais tarde'
        state.loading = false
    })
    .addCase(addProductsToCart, (state, action) => {
        state.productsInCart = [...state.productsInCart, action.payload]
    })
})


export default productsReducer

export const actions = {
    fetchProductsList,
    addProductsToCart
}