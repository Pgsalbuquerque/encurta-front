import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './App'
import Teste from './Teste'

export default function Router (){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/:link" component={Teste}/>
            </Switch>
        </BrowserRouter>
    )
}