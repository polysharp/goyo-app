import React from 'react';
import PropTypes from 'prop-types';

const UserProfileDropdown = ({ isOpen, setOpen }) => <div>NotificationModal</div>;

UserProfileDropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default UserProfileDropdown;
