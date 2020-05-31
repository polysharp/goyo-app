import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Modal, ModalHeader, ModalBody, ThemeButton } from 'components';
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
          <ThemeButton
            className="transition-all duration-200 ease-in"
            color="200"
            onClick={onClose}
          >
            <FontAwesomeIcon className="text-2xl" icon="times" />
          </ThemeButton>
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
