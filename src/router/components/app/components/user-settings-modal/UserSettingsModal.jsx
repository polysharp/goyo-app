import React from 'react';
import PropTypes from 'prop-types';

import { Modal, ModalHeader, ModalBody, ThemedButton, EaseIn } from 'components';
import { Languages, Currencies, Theme } from './components';

const UserSettingsModal = ({ isOpen, setOpen }) => {
  const onClose = () => {
    setOpen(!isOpen);
  };

  return (
    <Modal title="Parameters" isOpen={isOpen} onClose={onClose}>
      <ModalHeader>
        <div>
          <h1 className="font-bold">Paramètres</h1>
        </div>
        <div className="absolute" style={{ right: '24px' }}>
          <ThemedButton.Modal type="button" className="w-full h-full p-4" onClick={onClose}>
            <EaseIn>
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
                />
              </svg>
            </EaseIn>
          </ThemedButton.Modal>
        </div>
      </ModalHeader>
      <ModalBody>
        <Currencies />
        <Languages />
        <Theme />
      </ModalBody>
    </Modal>
  );
};

UserSettingsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default UserSettingsModal;
