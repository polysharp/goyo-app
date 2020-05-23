import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { SignIn, SignUp } from '../pages';

const AppRouter = () => (
  <Switch>
    <Route path="/auth/signin" component={SignIn} />
    <Route path="/auth/signup" component={SignUp} />
    <Route path="*">
      <Redirect to="/auth/signin" />
    </Route>
  </Switch>
);

export default AppRouter;
