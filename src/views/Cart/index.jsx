import CardList from "../../components/CardList";
import { Box, Button, Container, Alert, Typography } from "@mui/material";
import { useState } from "react";

const TREE_SECONDS_IN_MS = 3000

const styles = {
    totalAmountContainer: {
        display: 'flex', 
        flexDirection: 'column',
        marginTop: 10,
    },
}

export default function Cart(props) {
    const [showAlert, setShowAlert] = useState(false)


    const totalExpense = (productsList) => (
        productsList.reduce((amount, { price }) => amount += price, 0)
        .toFixed(2)
        .toString()
        .replace('.', ',')
    )
    
    const handleConffirmBuy = () => {
        setShowAlert(true)
        setTimeout(() => {setShowAlert(false) }, TREE_SECONDS_IN_MS)
        props.handleClearCart()
    }

    return (
        <div>
            <Box sx={{marginTop: 10}}>
                {
                    CardList({
                        list: props.productsInCart, 
                        text: 'RETIRAR DO CARRINHO', 
                        handleInteractWithItem: props.handleRemoveProductOfCart
                    })
                }
                 {
                    showAlert ? (
                        <Alert variant="filled" severity="success">
                            Parabéns sua compra foi finalizada com sucesso
                        </Alert>
                    )
                    :
                    (
                        <Container sx={styles.totalAmountContainer}>
                            <Typography variant="h4" sx={{textAlign: 'center'}}>
                                Valor Total R$ {totalExpense(props.productsInCart)}
                            </Typography>

                            <Button
                                variant="contained"
                                sx={{marginTop: 10}}
                                disabled={props.productsInCart.length <= 0}
                                onClick={handleConffirmBuy}
                            >
                                FINALIZAR COMPRA
                            </Button>
                        </Container>
                    )
                }
            </Box>
        </div>
    )
}