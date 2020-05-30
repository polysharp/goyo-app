import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import { customStyle, Header, Body } from '../../components/modal';

Modal.setAppElement(document.getElementById('root'));

const SettingsModal = ({ isOpen, setOpen }) => {
  const onClose = () => {
    setOpen(!isOpen);
  };

  return (
    <Modal contentLabel="Parameters" style={customStyle} isOpen={isOpen} onRequestClose={onClose}>
      <Header>Hello</Header>
      <Body>
        <button type="button" onClick={onClose}>
          close
        </button>
        <div className="h-64">I am a modal</div>
        <form>
          <input />
        </form>
      </Body>
    </Modal>
  );
};

SettingsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default SettingsModal;

// TODO: design modal header
// TODO: design modal body
