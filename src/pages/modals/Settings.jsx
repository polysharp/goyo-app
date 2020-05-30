import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ThemeButton } from '../../components';
import { customStyle, Header, Body } from '../../components/modal';

Modal.setAppElement(document.getElementById('root'));

const SettingsModal = ({ isOpen, setOpen }) => {
  const onClose = () => {
    setOpen(!isOpen);
  };

  return (
    <Modal contentLabel="Parameters" style={customStyle} isOpen={isOpen} onRequestClose={onClose}>
      <Header>
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
      </Header>
      <Body>
        <div className="h-64">I am a modal</div>
        <div className="h-64">I am a modal</div>
        <div className="h-64">I am a modal</div>
        <div className="h-screen">I am a modal</div>
        <div className="h-screen">I am a modal</div>
        <div>I am a modal</div>
      </Body>
    </Modal>
  );
};

SettingsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default SettingsModal;
