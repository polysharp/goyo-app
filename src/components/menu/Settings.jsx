import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IconButton } from '../library';

const Settings = () => (
  <div className="flex flex-col items-center justify-between w-full mb-2">
    <div className="flex flex-row items-center justify-center">
      <IconButton className="transition-all duration-200 ease-in">
        <FontAwesomeIcon className="text-2xl" icon="cogs" />
      </IconButton>
    </div>
    <hr className="w-10 mt-4 border-white" />
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

export default Settings;
