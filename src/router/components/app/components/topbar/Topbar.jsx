import React from 'react';

import PropTypes from 'prop-types';

import { Home, Notifications, Settings, Profile } from './components';

const Topbar = ({ openNotificationsDropdown, openSettingsModal, openProfileDropdown }) => (
  <div className="fixed inset-x-0 top-0 bg-white border-b h-15">
    <div className="flex flex-row items-center justify-between h-full">
      <Home />
      <div className="flex flex-row items-center justify-end flex-grow h-full mr-2">
        <Notifications openNotificationsDropdown={openNotificationsDropdown} />
        <Settings openSettingsModal={openSettingsModal} />
        <Profile openProfileDropdown={openProfileDropdown} />
      </div>
    </div>
  </div>
);

Topbar.propTypes = {
  openNotificationsDropdown: PropTypes.func.isRequired,
  openSettingsModal: PropTypes.func.isRequired,
  openProfileDropdown: PropTypes.func.isRequired,
};

export default Topbar;
