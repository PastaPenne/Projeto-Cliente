import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import UserLogin from '../pages/UserLogin'
import UserRegister from '../pages/UserRegister';
import ResetPassword from '../pages/ResetPassword';

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" component={UserLogin} />
                    <Route exact={true} path="/register" component={UserRegister} />
                    <Route exact={true} path="/reset_password" component={ResetPassword} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;