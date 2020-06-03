import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { EaseIn, ThemedButton } from 'components';
import { Notifications, Settings, Profile } from './components';

const Topbar = ({ openNotificationsDropdown, openSettingsModal, openProfileDropdown }) => (
  <div className="fixed inset-x-0 top-0 bg-white border-b h-15">
    <div className="flex flex-row items-center justify-between h-full">
      <div
        className="flex flex-col items-center justify-center border-r w-15"
        style={{ padding: '10px' }}
      >
        <ThemedButton.Nav as={NavLink} to="/" className="w-full h-full">
          <EaseIn>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M3.887-3.455A6.038,6.038,0,0,1,2.057-2.384a6.005,6.005,0,0,1-2.1.373,5.942,5.942,0,0,1-1.612-.217A6.027,6.027,0,0,1-3.1-2.844,6.275,6.275,0,0,1-4.333-3.8a5.926,5.926,0,0,1-.952-1.231A6.188,6.188,0,0,1-5.9-6.482,5.986,5.986,0,0,1-6.113-8.1,5.9,5.9,0,0,1-5.9-9.706a6.225,6.225,0,0,1,.611-1.448,5.926,5.926,0,0,1,.952-1.231A6.152,6.152,0,0,1-3.1-13.332a6.128,6.128,0,0,1,1.448-.611A5.942,5.942,0,0,1-.043-14.16a6.005,6.005,0,0,1,2.1.373,6.038,6.038,0,0,1,1.829,1.071L2.656-10.665a3.948,3.948,0,0,0-1.231-.849,3.6,3.6,0,0,0-1.468-.308,3.58,3.58,0,0,0-1.448.3,3.856,3.856,0,0,0-1.185.8,3.77,3.77,0,0,0-.8,1.181,3.58,3.58,0,0,0-.3,1.448,3.63,3.63,0,0,0,.3,1.46,3.807,3.807,0,0,0,.8,1.189,3.82,3.82,0,0,0,1.185.8,3.58,3.58,0,0,0,1.448.3,3.473,3.473,0,0,0,.861-.107,3.962,3.962,0,0,0,.8-.3V-8.1H3.887Z"
                transform="translate(13.113 20.16)"
              />
            </svg>
          </EaseIn>
        </ThemedButton.Nav>
      </div>
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
