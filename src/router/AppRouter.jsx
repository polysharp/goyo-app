import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { observer } from 'mobx-react';
import { useQuery } from '@apollo/react-hooks';

import { USER } from '../graphql';
import { useStore } from '../store';

import Redirector from './Redirector';
import { Layout, Menu } from '../components';
import { Dashboard, Renters, Properties } from '../pages';

const AppRouter = () => {
  const { user } = useStore();

  useQuery(USER.ME_QUERY, {
    onCompleted: (data) => user.populate(data),
  });

  return (
    <Layout>
      <Menu />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/renters" component={Renters} />
        <Route exact path="/properties" component={Properties} />
        <Redirector isAuthenticated />
      </Switch>
    </Layout>
  );
};

export default observer(AppRouter);
