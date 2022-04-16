import React from 'react'
import { Grid, CardActions, Button } from '@mui/material'

import Card from '../Card'

export default function CardList(list, handleAddProduct) {
    return (
        <Grid container rowSpacing={6} columnSpacing={{xs: 1, sm: 2, md: 8}}>
            {list.map(({id, name, price, image}) => (
                <Grid item xs={6} sx={{display: 'flex'}}>
                    <Card key={id} name={name} price={price} image={image}>
                        <CardActions>
                            <Button size="small" variant='contained' onClick={handleAddProduct}>Adicionar</Button>
                            <Button size="small">Sobre</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}