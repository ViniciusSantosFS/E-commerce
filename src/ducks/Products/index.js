import { createReducer } from "@reduxjs/toolkit"
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../services/axios'

const initialState = {
    products: [],
    productsPicked: [],
    loading: false,
    error: ''
}

const fetchProductsList = createAsyncThunk(
    '',
    async () => {
        const products = await axios.get()
        return products.data
    }
)

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
})


export default productsReducer

export const actions = {
    fetchProductsList
}