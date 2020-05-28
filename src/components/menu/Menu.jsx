import React from 'react';

import Nav from './Nav';
import Logo from './Logo';
import Settings from './Settings';

const Menu = () => (
  <div className="fixed inset-y-0 left-0" style={{ width: '70px' }}>
    <div className="flex flex-col items-center h-full">
      <Logo />
      <Nav />
      <Settings />
    </div>
  </div>
);

export default Menu;
