import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Skeleton from '../components/Skeleton';
import { authStore } from '../zustand/auth-store';

const PrivateRoute = ({ component: Component, ...rest }: any) => {

  const isLogged = authStore(state => !!state?.data?.accessToken);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return (
          isLogged ?
            <Skeleton>
              <Component {...rest} />
            </Skeleton>
            :
            <Redirect to={{ pathname: '/', state: { from: location } }} />
        )
      }}
    >

    </Route>
  )
}

export default PrivateRoute;