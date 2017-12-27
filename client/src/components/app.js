import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';

import LandingPage from '../containers/LandingPage';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter >
                <Route path='/' component={LandingPage} />
            </BrowserRouter>
        )
    }
}
