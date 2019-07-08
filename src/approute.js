import React, { Component } from 'react';
import Home from './home';
import Login from './login';
import Signup from './signup';
import { Router, Route, browserHistory } from 'react-router';
import NotFound from './notfound';
import Contact from './contact';
import About from './about';


class AppRoutes extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route exact path='/' component={Home} />
                <Route path='/home' component={Home} />
                <Route path='/signup' component={Signup} />
                <Route path='/login' component={Login} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
                <Route path='*' component={NotFound} />
            </Router >
        );
    }
}
export default AppRoutes;
 

