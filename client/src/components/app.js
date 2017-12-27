import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Aux from 'react-aux';

import BlogDetailPage from '../containers/BlogDetailPage';
import BlogOverviewPage from '../containers/BlogOverviewPage';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter >
                <Switch>
                    <Route path='/blog/:slug' component={BlogDetailPage} />
                    <Route path='/blog' component={BlogOverviewPage} />
                </Switch>
            </BrowserRouter>
        )
    }
}
