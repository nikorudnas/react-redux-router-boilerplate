import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './containers/Main';
import Auth from './containers/Auth';
import PageNotFound from './containers/PageNotFound';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/auth' component={Auth} />
                <Route path='*' component={PageNotFound} />
            </Switch>
        );
    }
}

export default Routes;
