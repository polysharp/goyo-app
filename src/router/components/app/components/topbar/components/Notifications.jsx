import React from 'react';
import PropTypes from 'prop-types';

import { EaseIn, ThemedButton } from 'components';

const Notifications = ({ openNotificationsDropdown }) => (
  <div className="flex flex-col items-center justify-center w-15">
    <ThemedButton.Nav
      as="button"
      type="button"
      className="w-full h-full p-4 text-gray-300 hover:text-black"
      onClick={() => openNotificationsDropdown(true)}
    >
      <EaseIn>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M15 19a3 3 0 0 1-6 0H4a1 1 0 0 1 0-2h1v-6a7 7 0 0 1 4.02-6.34 3 3 0 0 1 5.96 0A7 7 0 0 1 19 11v6h1a1 1 0 0 1 0 2h-5zm-4 0a1 1 0 0 0 2 0h-2zm0-12.9A5 5 0 0 0 7 11v6h10v-6a5 5 0 0 0-4-4.9V5a1 1 0 0 0-2 0v1.1z"
          />
        </svg>
      </EaseIn>
    </ThemedButton.Nav>
  </div>
);

Notifications.propTypes = {
  openNotificationsDropdown: PropTypes.func.isRequired,
};

export default Notifications;
