import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

class Routes extends Component {
    render(){
        return(
            <Switch>
                <Route
                    exact path='/'
                />
            </Switch>
        )
    }
}

export default Routes