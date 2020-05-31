import React from 'react';
import PropTypes from 'prop-types';

import StoreContext from './StoreContext';
import rootStore from '../rootStore';

const StoreProvider = ({ children }) => (
  <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
);

StoreProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default StoreProvider;
