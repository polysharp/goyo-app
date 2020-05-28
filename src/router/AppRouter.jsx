import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Dashboard } from '../pages';
import Redirector from './Redirector';

import { Layout, Menu } from '../components';

const AppRouter = () => (
  <Switch>
    <Layout>
      <Menu />
      <Route exact path="/" component={Dashboard} />
      <Redirector isAuthenticated />
    </Layout>
  </Switch>
);

export default AppRouter;
