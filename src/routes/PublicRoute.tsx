import React from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';

import { useAuth } from '../contexts/auth.context';
import AuthLayout from '../components/Layout/AuthLayout';

const PublicRoute = ({
  component: C, user, props: cProps, ...rest
}: any) => {
  const { me } = useAuth();
  const authorized = me;

  return (
    <Route
      {...rest}
      render={(props) => (!authorized ? (
        <AuthLayout>
          <C {...props} {...cProps} match={rest.computedMatch} />
        </AuthLayout>
      ) : (
        <Redirect to="/" />
      ))}
    />
  );
};

export default PublicRoute;
