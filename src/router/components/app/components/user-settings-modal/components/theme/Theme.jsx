import React from 'react';

import { useTheme } from 'theme';
import ThemeButton from './components';

const Theme = () => {
  const { theme, themeNames, setTheme } = useTheme();

  return (
    <div className="pb-6 mt-6">
      <h2 className="pb-4 text-xl font-semibold">Theme</h2>
      <div className="grid grid-cols-3 gap-2">
        {themeNames.map((color) => (
          <div className="flex flex-col items-center" key={color}>
            <ThemeButton color={color} selected={color === theme} setTheme={setTheme} />
            <span className="pt-1 text-sm uppercase">{color}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Theme;
