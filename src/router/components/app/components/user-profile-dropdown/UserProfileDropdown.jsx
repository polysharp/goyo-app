import React from 'react';
import PropTypes from 'prop-types';

import {
  Dropdown,
  DropdownHeader,
  DropdownBody,
  DropdownFooter,
  ThemedButton,
  EaseIn,
} from 'components';

import profileDropdownCustomStyle from './profile-dropdown-custom-style';

const UserProfileDropdown = ({ isOpen, setOpen }) => {
  const onClose = () => {
    setOpen(!isOpen);
  };

  return (
    <Dropdown
      title="Notifications"
      isOpen={isOpen}
      onClose={onClose}
      customStyle={profileDropdownCustomStyle}
    >
      <DropdownHeader align="start">
        <div>
          <h1 className="leading-tight">Paramètres</h1>
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
        <div>
          <span className="block py-4 text-center opacity-25">Pas de nouvelle, bonne nouvelle</span>
        </div>
      </DropdownBody>
      <DropdownFooter>
        <ThemedButton.Modal type="button" className="w-full h-full">
          <EaseIn>
            <span>Tout marquer comme lu</span>
          </EaseIn>
        </ThemedButton.Modal>
      </DropdownFooter>
    </Dropdown>
  );
};

UserProfileDropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default UserProfileDropdown;
