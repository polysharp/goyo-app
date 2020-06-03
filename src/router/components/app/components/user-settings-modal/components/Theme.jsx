import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useTheme } from 'theme';

import { ThemedButton } from 'components';

const Palette = ({ color }) => (
  <div className="grid h-full grid-cols-9 rounded">
    <div className={`h-full rounded-l ${`bg-${color}-100`}`} />
    <div className={`h-full ${`bg-${color}-200`}`} />
    <div className={`h-full ${`bg-${color}-300`}`} />
    <div className={`h-full ${`bg-${color}-400`}`} />
    <div className={`h-full ${`bg-${color}-500`}`} />
    <div className={`h-full ${`bg-${color}-600`}`} />
    <div className={`h-full ${`bg-${color}-700`}`} />
    <div className={`h-full ${`bg-${color}-800`}`} />
    <div className={`h-full rounded-r ${`bg-${color}-900`}`} />
  </div>
);

Palette.propTypes = {
  color: PropTypes.string.isRequired,
};

const Theme = () => {
  const { theme, themeNames, setTheme } = useTheme();

  return (
    <div className="pb-6 mt-6">
      <h2 className="pb-4 pl-2 text-xl text-gray-800">
        <FontAwesomeIcon icon="theater-masks" />
        <span className="pl-2">Theme</span>
      </h2>
      <div className="grid grid-cols-3 gap-2">
        {themeNames.map((color) => (
          <div className="flex flex-col items-center" key={color}>
            <ThemedButton.Modal
              type="button"
              className="w-full h-16 p-1 border border-transparent rounded"
              selected={color === theme}
              onClick={() => setTheme(color)}
            >
              <Palette color={color} />
            </ThemedButton.Modal>
            <span className="pt-1 text-sm uppercase">{color}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Theme;
