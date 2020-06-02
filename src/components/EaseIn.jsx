import React from 'react';
import PropTypes from 'prop-types';

const EaseIn = ({ children }) => (
  <div className="w-full h-full transition-all duration-200 ease-in">{children}</div>
);

EaseIn.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default EaseIn;
