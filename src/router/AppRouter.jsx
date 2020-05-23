import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Dashboard } from '../pages';

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="*">
      <Redirect to="/" />
    </Route>
  </Switch>
);

export default AppRouter;
