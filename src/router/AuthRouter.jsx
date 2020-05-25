import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { SignIn, SignUp } from '../pages';
import Redirector from './Redirector';

const AppRouter = () => (
  <Switch>
    <Route path="/auth/signin" component={SignIn} />
    <Route path="/auth/signup" component={SignUp} />
    <Redirector isAuthenticated={false} />
  </Switch>
);

export default AppRouter;
