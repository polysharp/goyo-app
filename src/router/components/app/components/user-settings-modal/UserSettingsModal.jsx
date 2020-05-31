import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { modalCustomStyle, ModalHeader, ModalBody } from 'components';
import { Languages, Currencies, Theme } from './components';

Modal.setAppElement(document.getElementById('root'));

const UserSettingsModal = ({ isOpen, setOpen }) => {
  const onClose = () => {
    setOpen(!isOpen);
  };

  return (
    <Modal
      contentLabel="Parameters"
      style={modalCustomStyle}
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <ModalHeader>
        <div>
          <h1 className="font-bold">Paramètres</h1>
        </div>
        <div className="absolute" style={{ right: '24px' }}>
          {/* //TODO: REFACTOR THEME BUTTON */}
          {/* <ThemeButton
            className="transition-all duration-200 ease-in"
            color="200"
            onClick={onClose}
          >
            <FontAwesomeIcon className="text-2xl" icon="times" />
          </ThemeButton> */}
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
