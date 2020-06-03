import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';

import { SignIn, SignUp } from 'pages/auth';

import Redirector from '../shared';

const Auth = () => {
  const client = useApolloClient();

  useEffect(() => {
    client.resetStore();
  }, [client]);

  return (
    <Switch>
      <Route path="/auth/signin" component={SignIn} />
      <Route path="/auth/signup" component={SignUp} />
      <Redirector isAuthenticated={false} />
    </Switch>
  );
};

export default Auth;
