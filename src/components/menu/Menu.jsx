import React from 'react';
import PropTypes from 'prop-types';

import Nav from './Nav';
import Logo from './Logo';
import Settings from './Settings';

const Menu = ({ openProfileModal }) => (
  <div className="fixed inset-y-0 left-0" style={{ width: '70px' }}>
    <div className="flex flex-col items-center h-full">
      <Logo />
      <Nav />
      <Settings openProfileModal={openProfileModal} />
    </div>
  </div>
);

Menu.propTypes = {
  openProfileModal: PropTypes.func.isRequired,
};

export default Menu;
