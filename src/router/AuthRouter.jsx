import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { SignIn, SignUp } from '../pages';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/auth/signin" component={SignIn} />
      <Route path="/auth/signup" component={SignUp} />
      <Route path="*">
        <Redirect to="/auth/signin" />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
