import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Dashboard } from '../pages';
import Redirector from './Redirector';

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/une/route/loin" component={() => <h1>route loin</h1>} />
    <Redirector isAuthenticated />
  </Switch>
);

export default AppRouter;
