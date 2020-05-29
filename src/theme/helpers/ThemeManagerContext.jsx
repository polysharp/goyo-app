import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeManagerContext = createContext({
  theme: '',
  setTheme: () => undefined,
});

const ThemeManagerProvider = ({ children }) => {
  const [theme, _setTheme] = useState('');

  // const toggleTheme = () => {
  //   localStorage.setItem('user_theme_dark', JSON.stringify(!isDark));
  //   setIsDark(!isDark);
  // };

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