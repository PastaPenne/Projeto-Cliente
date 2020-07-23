import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import UserLogin from '../pages/UserLogin'
import UserRegister from '../pages/UserRegister';
import ResetPassword from '../pages/ResetPassword';
import Feed from '../pages/Feed';

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" component={UserLogin} />
                    <Route exact={true} path="/register" component={UserRegister} />
                    <Route exact={true} path="/reset_password" component={ResetPassword} />
                    <Route exact={true} path="/feed" component={Feed} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;