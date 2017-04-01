import React, { PropTypes } from 'react';
import { Router,Route,browserHistory,IndexRoute } from 'react-router';

import App from './App.js'
import Home from './components/Home.js'
import SignIn from './components/SignIn.js'
import SignUp from './components/SignUp.js'

export default function () {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='signin' component={SignIn}/>
        <Route path='signup' component={SignUp}/>
      </Route>
    </Router>
  )
}
