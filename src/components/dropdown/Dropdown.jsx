import React from 'react';
import PropTypes from 'prop-types';
import * as ReactModal from 'react-modal';

ReactModal.setAppElement(document.getElementById('root'));

const Modal = ({ children, title, isOpen, onClose, customStyle }) => (
  <ReactModal contentLabel={title} style={customStyle} isOpen={isOpen} onRequestClose={onClose}>
    {children}
  </ReactModal>
);

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  title: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  customStyle: PropTypes.exact({
    overlay: PropTypes.object,
    content: PropTypes.object,
  }).isRequired,
};

Modal.defaultProps = {
  title: 'Dropdown',
};

export default Modal;
