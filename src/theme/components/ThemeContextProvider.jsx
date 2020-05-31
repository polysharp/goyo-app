import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ThemeContext from './ThemeContext';

const ThemeContextProvider = ({ children }) => {
  const [theme, _setTheme] = useState('');

  const setTheme = (name) => {
    localStorage.setItem('user_theme', name);
    _setTheme(name);
  };

  useEffect(() => {
    const themeFromLocalStorage = localStorage.getItem('user_theme');

    if (themeFromLocalStorage) {
      setTheme(themeFromLocalStorage);
    } else {
      localStorage.setItem('user_theme', 'gray');
      setTheme('gray');
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ThemeContextProvider;
