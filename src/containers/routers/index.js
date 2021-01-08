import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Admin from '../admin';

const RouteList = ({ history }) => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact strict component={Admin} />
                <Route path="/user" exact strict component={Admin} />
            </Switch>
        </Router>
    )
}

export default RouteList
