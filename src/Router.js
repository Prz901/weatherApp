import { Route, BrowserRouter, Switch } from 'react-router-dom'
import React from 'react'

import Home from './pages/Home'
import PageNotFound from './pages/NotFound'

export default (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />              
                <Route exact path="/*" component={() => <PageNotFound/>} />
            </Switch>
        </BrowserRouter>
    )
}