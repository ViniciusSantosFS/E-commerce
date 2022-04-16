import React from 'react'
import { Card as MuiCard,  CardContent, CardMedia, Typography } from '@mui/material'

export default function Card({name, price, image, children}) {
    const styles = {
        container: {
            display: 'flex',
            alignItems: 'center', 
            paddingBottom: 2,
        },

        media: {
            height: 150,
            width: 150,
        },
    }
    return (
        <MuiCard sx={styles.container}>
            <CardMedia
                component="img"
                sx={styles.media}
                image={require(`../../assets/${image}`)}
                alt="Imagem do produto"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant='body1'>
                   R$ {price}
                </Typography>
            </CardContent>
            {children}
        </MuiCard>
    )
}