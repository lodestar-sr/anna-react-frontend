import React from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';

import { useAuth } from '../contexts/auth.context';
import Layout from '../components/Layout';

const PrivateRoute = ({
  component: C, user, props: cProps, path, ...rest
}: any) => {
  const { me, loaded } = useAuth();
  const authorized = me;

  return (
    <Route
      {...rest}
      render={(props) => (authorized ? (
        <Layout>
          <C {...props} {...cProps} match={rest.computedMatch} />
        </Layout>
      ) : (
        loaded ? (
          <Redirect to="/auth/signin" />
        ) : (
          <>
            Loading...
          </>
        )
      ))}
    />
  );
};

export default PrivateRoute;
