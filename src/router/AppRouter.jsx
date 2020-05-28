import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Dashboard } from '../pages';
import Redirector from './Redirector';

import { Layout, Menu } from '../components';

const AppRouter = () => (
  <Layout>
    <Menu />
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/une/route" component={() => <h1>une route</h1>} />
      <Redirector isAuthenticated />
    </Switch>
  </Layout>
);

export default AppRouter;
