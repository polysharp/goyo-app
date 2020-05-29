import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ThemeManagerContext, getSchemeNames } from '../../theme';
import Button from './shared/Button';

const schemes = getSchemeNames;

const Settings = () => {
  const [current, setCurrent] = useState(0);
  const { setTheme } = useContext(ThemeManagerContext);

  const nextTheme = () => {
    setTheme(schemes[current]);
    setCurrent((current + 1) % schemes.length);
  };

  return (
    <div className="flex flex-col items-center justify-between w-full mb-2">
      <div className="flex flex-row items-center justify-center pb-3">
        <Button className="text-white transition-all duration-200 ease-in hover:text-pink-500 focus:text-pink-500">
          <FontAwesomeIcon className="text-xl" icon="yen-sign" />
        </Button>
      </div>
      <div className="flex flex-row items-center justify-center">
        <Button
          className="text-white transition-all duration-200 ease-in hover:text-blue-500 focus:text-blue-500"
          onClick={() => nextTheme()}
        >
          <FontAwesomeIcon className="text-xl" icon="theater-masks" />
        </Button>
      </div>
      <hr className="w-10 mt-5 border-white" />
      <div className="flex flex-row items-center justify-center h-20">
        <button
          type="button"
          className="w-10 h-10 rounded-lg rounded-full focus:outline-none focus:shadow-outline"
        >
          <img src="https://api.adorable.io/avatars/285" alt="Avatar" className="rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default Settings;
