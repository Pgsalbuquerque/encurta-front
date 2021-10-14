import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './App'
import Redirect from './Redirect'

export default function Router (){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/:link" component={Redirect}/>
            </Switch>
        </BrowserRouter>
    )
}