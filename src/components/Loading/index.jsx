import React from 'react'

import { CircularProgress, Box } from '@mui/material'

const styles = {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center'
}

export default function Loading() {
    return (
        <Box sx={{...styles}}>
            <CircularProgress />
        </Box>
    )
}