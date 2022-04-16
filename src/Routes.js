import React from 'react'
import { BrowserRouter, Routes as Switch, Route} from 'react-router-dom'

import Home from './views/Home/Container'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' element={<Home />}/>
            </Switch>
        </BrowserRouter>
    )
}