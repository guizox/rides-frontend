import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Login from '../container/Login';
import Dashboard from '../container/Dashboard';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;