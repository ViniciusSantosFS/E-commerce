import React from 'react'

import { Container, Box, Alert } from '@mui/material'

import Loading from '../../components/Loading'
import CardList from '../../components/CardList'


export default function Home(props) {

    if (props.loading) {
        return (
            <Box sx={{ marginTop: 30 }}>
              <Loading />
            </Box>
        )
    }

    return (
        <div>
            <Container sx={{marginTop: 10, marginBottom: 10}}>
              {
                props.error !== '' ? (
                    <Alert variant="filled" severity="error"> {props.error} </Alert>
                ) : CardList({
                    list: props.products,
                    text: 'ADICIONAR',
                    handleInteractWithItem: props.handleAddProduct
                })
              }
            </Container>
        </div>
    )
}