import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown, DropdownHeader, DropdownBody, ThemedButton, EaseIn } from 'components';

import profileDropdownCustomStyle from './profile-dropdown-custom-style';

const UserProfileDropdown = ({ isOpen, setOpen }) => {
  const onClose = () => {
    setOpen(!isOpen);
  };

  return (
    <Dropdown
      title="Profile"
      isOpen={isOpen}
      onClose={onClose}
      customStyle={profileDropdownCustomStyle}
    >
      <DropdownHeader align="start">
        <div>
          <h1 className="leading-tight">Profile</h1>
        </div>
        <div className="absolute" style={{ right: '4px' }}>
          <ThemedButton.Modal type="button" className="w-full h-full p-2" onClick={onClose}>
            <EaseIn>
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
                />
              </svg>
            </EaseIn>
          </ThemedButton.Modal>
        </div>
      </DropdownHeader>
      <DropdownBody>
        <ThemedButton.Dropdown type="button" className="w-full h-full px-3 py-2 text-left">
          <EaseIn>
            <span>Feedbacks</span>
          </EaseIn>
        </ThemedButton.Dropdown>
        <ThemedButton.Dropdown type="button" className="w-full h-full px-3 py-2 text-left">
          <EaseIn>
            <span>Aide</span>
          </EaseIn>
        </ThemedButton.Dropdown>
        <ThemedButton.Dropdown type="button" className="w-full h-full p-2 border-t">
          <EaseIn>
            <span>Déconnexion</span>
          </EaseIn>
        </ThemedButton.Dropdown>
      </DropdownBody>
    </Dropdown>
  );
};

UserProfileDropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default UserProfileDropdown;
