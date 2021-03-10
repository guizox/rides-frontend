import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }: any) => {

  const isLogged = true;

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return (
          isLogged ?
            <Component {...rest} /> :
            <Redirect to={{ pathname: '/', state: { from: location } }} />
        )
      }}
    >

    </Route>
  )
}

export default PrivateRoute;