import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { observer } from 'mobx-react';
import { useQuery } from '@apollo/react-hooks';

import { USER } from '../graphql';
import { useStore } from '../store';

import Redirector from './Redirector';
import { Layout, Menu } from '../components';

import { Dashboard, Renters, Properties, Activites, Statistics } from '../pages';
import SettingsModal from '../pages/modals';

const AppRouter = () => {
  const { user } = useStore();
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  useQuery(USER.ME_QUERY, {
    onCompleted: (data) => user.populate(data),
  });

  return (
    <Layout>
      <Menu openProfileModal={setProfileModalOpen} />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/renters" component={Renters} />
        <Route exact path="/properties" component={Properties} />
        <Route exact path="/activities" component={Activites} />
        <Route exact path="/statistics" component={Statistics} />
        <Redirector isAuthenticated />
      </Switch>
      <SettingsModal isOpen={profileModalOpen} setOpen={setProfileModalOpen} />
    </Layout>
  );
};

export default observer(AppRouter);
