import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeManagerContext, schemesName } from '../../../../theme';

const SchemeButton = ({ color, selected, setTheme }) => (
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

SchemeButton.propTypes = {
  color: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  setTheme: PropTypes.func.isRequired,
};

const Theme = () => {
  const { theme, setTheme } = useContext(ThemeManagerContext);

  return (
    <div className="pb-6 mt-6">
      <h2 className="pb-4 text-xl font-semibold">Theme</h2>
      <div className="grid grid-cols-3 gap-2">
        {schemesName.map((color) => (
          <div className="flex flex-col items-center">
            <SchemeButton
              key={color}
              color={color}
              selected={color === theme}
              setTheme={setTheme}
            />
            <span>{color}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Theme;
