import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({ label }) => (
  <div className="mt-6">
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center text-sm leading-5">
        <span className="px-2 text-gray-500 bg-white">{label}</span>
      </div>
    </div>
  </div>
);

Divider.propTypes = {
  label: PropTypes.string,
};

Divider.defaultProps = {
  label: '',
};

export default Divider;
