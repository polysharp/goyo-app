import React from 'react';
import PropTypes from 'prop-types';

const UserNotificationsDropdown = ({ isOpen, setOpen }) => <div>NotificationModal</div>;

UserNotificationsDropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default UserNotificationsDropdown;
