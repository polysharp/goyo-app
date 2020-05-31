import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { observer } from 'mobx-react';
import { useQuery } from '@apollo/react-hooks';

import { ME } from 'gql/user';
import { useStore } from 'store';

import { Dashboard, Renters, Properties, Activites, Statistics } from 'pages/app';

import Redirector from '../shared';
import { Layout, Drawer, UserSettingsModal } from './components';

const App = () => {
  const { user } = useStore();

  useQuery(ME, {
    onCompleted: (data) => user.populate(data),
  });

  const [profileModalOpen, setProfileModalOpen] = useState(false);

  return (
    <Layout>
      <Drawer openProfileModal={setProfileModalOpen} />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/renters" component={Renters} />
        <Route exact path="/properties" component={Properties} />
        <Route exact path="/activities" component={Activites} />
        <Route exact path="/statistics" component={Statistics} />
        <Redirector isAuthenticated />
      </Switch>
      <UserSettingsModal isOpen={profileModalOpen} setOpen={setProfileModalOpen} />
    </Layout>
  );
};

export default observer(App);
