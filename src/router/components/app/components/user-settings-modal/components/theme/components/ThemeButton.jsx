import React from 'react';
import PropTypes from 'prop-types';

const ThemeButton = ({ color, selected, setTheme }) => (
  <button
    type="button"
    onClick={() => setTheme(color)}
    className={`relative w-full h-16 p-1 rounded-lg focus:outline-none focus:shadow-outline border border-transparent
    ${selected ? 'border-gray-900' : 'hover:border-gray-900'}`}
  >
    <div className="grid h-full grid-cols-9 rounded-lg">
      <div className={`h-full rounded-l-lg ${`bg-${color}-100`}`} />
      <div className={`h-full ${`bg-${color}-200`}`} />
      <div className={`h-full ${`bg-${color}-300`}`} />
      <div className={`h-full ${`bg-${color}-400`}`} />
      <div className={`h-full ${`bg-${color}-500`}`} />
      <div className={`h-full ${`bg-${color}-600`}`} />
      <div className={`h-full ${`bg-${color}-700`}`} />
      <div className={`h-full ${`bg-${color}-800`}`} />
      <div className={`h-full rounded-r-lg ${`bg-${color}-900`}`} />
    </div>
  </button>
);

ThemeButton.propTypes = {
  color: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  setTheme: PropTypes.func.isRequired,
};
