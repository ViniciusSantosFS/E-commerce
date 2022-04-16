import React from 'react'
import { Grid, CardActions, Button } from '@mui/material'

import Card from '../Card'

export default function CardList(list, handleAddItemToCart) {
    return (
        <Grid container rowSpacing={6} columnSpacing={{xs: 1, sm: 2, md: 8}}>
            {list.map((item) => (
                <Grid key={item.id} item xs={6} sx={{display: 'flex'}}>
                    <Card name={item.name} price={item.price.toString().replace('.', ',')} image={item.image}>
                        <CardActions>
                            <Button size="small" variant='contained' onClick={() => handleAddItemToCart(item) }>Adicionar</Button>
                            <Button size="small">Sobre</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}