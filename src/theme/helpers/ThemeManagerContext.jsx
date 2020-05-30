import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeManagerContext = createContext({
  theme: '',
  // eslint-disable-next-line no-unused-vars
  setTheme: (name) => undefined,
});

const ThemeManagerProvider = ({ children }) => {
  const [theme, _setTheme] = useState('');

  const setTheme = (name) => {
    localStorage.setItem('user_theme', name);
    _setTheme(name);
  };

  useEffect(() => {
    const themeFromLocalStorage = localStorage.getItem('user_theme');

    if (themeFromLocalStorage) {
      setTheme(themeFromLocalStorage);
    }
  }, []);

  return (
    <ThemeManagerContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeManagerContext.Provider>
  );
};

ThemeManagerProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export { ThemeManagerContext, ThemeManagerProvider };
