import React from 'react';
import PropTypes from 'prop-types';

import { Logo, Nav, Settings } from './components';

const Drawer = ({ openProfileModal }) => (
  <div className="fixed inset-y-0 left-0" style={{ width: '70px' }}>
    <div className="flex flex-col items-center h-full">
      <Logo />
      <Nav />
      <Settings openProfileModal={openProfileModal} />
    </div>
  </div>
);

Drawer.propTypes = {
  openProfileModal: PropTypes.func.isRequired,
};

export default Drawer;
