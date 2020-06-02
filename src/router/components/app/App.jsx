import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { observer } from 'mobx-react';
import { useQuery } from '@apollo/react-hooks';

import { ME } from 'gql/user';
import { useStore } from 'store';

import { Dashboard, Renters, Properties, Activites, Statistics } from 'pages/app';

import Redirector from '../shared';
import { Layout, Topbar, Sidebar, UserSettingsModal } from './components';

const App = () => {
  const { user } = useStore();

  useQuery(ME, {
    onCompleted: (data) => user.populate(data),
  });

  const [userProfileModalOpen, setUserProfileModalOpen] = useState(false);

  return (
    <Layout>
      <Topbar openUserProfileModal={setUserProfileModalOpen} />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/renters" component={Renters} />
        <Route exact path="/properties" component={Properties} />
        <Route exact path="/activities" component={Activites} />
        <Route exact path="/statistics" component={Statistics} />
        <Redirector isAuthenticated />
      </Switch>
      <UserSettingsModal isOpen={userProfileModalOpen} setOpen={setUserProfileModalOpen} />
    </Layout>
  );
};

export default observer(App);
