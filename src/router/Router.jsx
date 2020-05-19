import React from 'react';
import { observer, inject } from 'mobx-react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Auth from '../pages/Auth';
import Dashboard from '../pages/Dashboard';

const Router = ({ store }) => {
  const { isAuthenticated } = store.user;

  return (
    <BrowserRouter>
      <Switch>
        {!isAuthenticated && <Route path="/auth" component={Auth} />}
        {isAuthenticated && <Route exact path="/" component={Dashboard} />}
        <Route path="*">
          {isAuthenticated && <Redirect to="/" />}
          {!isAuthenticated && <Redirect to="/auth" />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default inject('store')(observer(Router));
