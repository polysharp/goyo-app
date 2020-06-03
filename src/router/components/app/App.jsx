import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { observer } from 'mobx-react';
import { useQuery } from '@apollo/react-hooks';

import { ME } from 'gql/user';
import { useStore } from 'store';

import { Dashboard, Renters, Properties, Activites, Statistics } from 'pages/app';

import Redirector from '../shared';
import {
  Layout,
  Topbar,
  Sidebar,
  UserNotificationsDropdown,
  UserSettingsModal,
  UserProfileDropdown,
} from './components';

const App = () => {
  const { user } = useStore();

  useQuery(ME, {
    onCompleted: (data) => user.populate(data),
  });

  const [notificationsDropdownOpen, setNotificationsDropdownOpen] = useState(false);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  return (
    <Layout>
      <Topbar
        openProfileDropdown={setProfileDropdownOpen}
        openSettingsModal={setSettingsModalOpen}
        openNotificationsDropdown={setNotificationsDropdownOpen}
      />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/renters" component={Renters} />
        <Route exact path="/properties" component={Properties} />
        <Route exact path="/activities" component={Activites} />
        <Route exact path="/statistics" component={Statistics} />
        <Redirector isAuthenticated />
      </Switch>
      <UserNotificationsDropdown
        isOpen={notificationsDropdownOpen}
        setOpen={setNotificationsDropdownOpen}
      />
      <UserSettingsModal isOpen={settingsModalOpen} setOpen={setSettingsModalOpen} />
      <UserProfileDropdown isOpen={profileDropdownOpen} setOpen={setProfileDropdownOpen} />
    </Layout>
  );
};

export default observer(App);
