import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Auth from '../pages/Auth';
import Dashboard from '../pages/Dashboard';

const isAuth = false;

const Router = () => (
  <BrowserRouter>
    <Switch>
      {!isAuth && <Route path="/auth" component={Auth} />}
      {isAuth && <Route exact path="/" component={Dashboard} />}
      <Route path="*">
        {isAuth && <Redirect to="/" />}
        {!isAuth && <Redirect to="/auth" />}
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
