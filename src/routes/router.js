import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import UserLogin from '../pages/UserLogin/index'

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" component={UserLogin} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;