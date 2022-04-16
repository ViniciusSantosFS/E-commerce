import React from 'react'

import { Container, BottomNavigation } from '@mui/material'

import Loading from '../../components/Loading'
import CardList from '../../components/CardList'
import NavBar from '../../components/NavBar'

export default function Home(props) {
    if (props.loading) {
        return <Loading/>
    }

    return (
        <div>
            <NavBar />
            <Container sx={{marginTop: 10, marginBottom: 10}}>
              {
                CardList(props.products, () =>{})
              }
            </Container>

            <BottomNavigation
                showLabels
                sx={{backgroundColor: "#1976D2"}}
            >
            </BottomNavigation>
        </div>
    )
}