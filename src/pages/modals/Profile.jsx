import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import styled from 'styled-components';
import tw from 'tailwind.macro';

const customModalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(34, 34, 34, .6)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    margin: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: 0,
  },
};

const ModalHeader = styled.header`
  @media (min-width: 744px) {
    width: 568px;
  }
`;

const ModalBody = styled.div`
  ${tw`p-6`}
`;

Modal.setAppElement(document.getElementById('root'));

const ProfileModal = ({ isOpen, setOpen }) => {
  const onClose = () => {
    setOpen(!isOpen);
  };

  return (
    <Modal
      contentLabel="Profile Modal"
      style={customModalStyle}
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <ModalHeader>Hello</ModalHeader>
      <ModalBody>
        <button type="button" onClick={onClose}>
          close
        </button>
        <div className="h-64">I am a modal</div>
        <form>
          <input />
        </form>
      </ModalBody>
    </Modal>
  );
};

ProfileModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default ProfileModal;

// TODO: Move Modal components to separate folder in components/modal
// TODO: Move custom style to separate folder in components/modal
// TODO: design modal header
// TODO: design modal body
