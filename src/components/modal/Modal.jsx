import React from 'react';
import PropTypes from 'prop-types';
import * as ReactModal from 'react-modal';

import modalCustomStyle from './modal-custom-style';

ReactModal.setAppElement(document.getElementById('root'));

const Modal = ({ children, title, isOpen, onClose }) => (
  <ReactModal
    contentLabel={title}
    style={modalCustomStyle}
    isOpen={isOpen}
    onRequestClose={onClose}
  >
    {children}
  </ReactModal>
);

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  title: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  title: 'Modal',
};

export default Modal;
