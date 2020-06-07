import React from 'react';
import PropTypes from 'prop-types';

const EaseIn = ({ children, className }) => (
  <div className={`w-full h-full transition-all duration-200 ease-in ${className}`}>{children}</div>
);

EaseIn.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  className: PropTypes.string,
};

EaseIn.defaultProps = {
  className: '',
};

export default EaseIn;
