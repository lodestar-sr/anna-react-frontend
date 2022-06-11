import React from 'react';
import { Redirect, Switch } from 'react-router';

import SignIn from '../containers/Auth/SignIn';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Home from '../containers/Home';
import SignUp from '../containers/Auth/SignUp';

function Routes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <PublicRoute
        path="/auth/signin"
        component={SignIn}
      />
      <PublicRoute
        path="/auth/signup"
        component={SignUp}
      />
      <PrivateRoute
        path="/home"
        component={Home}
      />
    </Switch>
  );
}

export default Routes;
