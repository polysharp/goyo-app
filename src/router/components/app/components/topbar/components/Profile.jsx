import React from 'react';
import PropTypes from 'prop-types';

import { EaseIn, ThemedButton } from 'components';

const Profile = ({ openProfileDropdown, profileDropdownOpen }) => (
  <div className="flex flex-col items-center justify-center h-full">
    <ThemedButton.Nav
      as="button"
      type="button"
      className="w-full h-full p-2"
      onClick={() => openProfileDropdown(true)}
    >
      <div className="flex flex-row items-center justify-between">
        <img
          src="https://api.adorable.io/avatars/280"
          className="h-8 mr-2 rounded-full shadow"
          alt="You"
        />
        <EaseIn>
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`w-4 h-4 transform ${profileDropdownOpen ? '-rotate-90' : 'rotate-90'}`}
          >
            <path
              fillRule="evenodd"
              d="M15,10.001c0,0.299-0.305,0.514-0.305,0.514l-8.561,5.303C5.51,16.227,5,15.924,5,15.149V4.852  c0-0.777,0.51-1.078,1.135-0.67l8.561,5.305C14.695,9.487,15,9.702,15,10.001z"
            />
          </svg>
        </EaseIn>
      </div>
    </ThemedButton.Nav>
  </div>
);

Profile.propTypes = {
  openProfileDropdown: PropTypes.func.isRequired,
  profileDropdownOpen: PropTypes.bool.isRequired,
};

export default Profile;
