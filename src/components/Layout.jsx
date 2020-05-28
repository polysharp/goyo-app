import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <main className="min-w-full min-h-screen bg-gray-900">{children}</main>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
