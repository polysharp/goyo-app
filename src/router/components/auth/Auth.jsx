import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { SignIn, SignUp } from 'pages/auth';

import Redirector from '../shared';

const Auth = () => (
  <Switch>
    <Route path="/auth/signin" component={SignIn} />
    <Route path="/auth/signup" component={SignUp} />
    <Redirector isAuthenticated={false} />
  </Switch>
);

export default Auth;
