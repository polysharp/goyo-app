import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import ThemeContext from './ThemeContext';
import { themeWithName } from '../utils';

const StyledThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const currentTheme = themeWithName(theme);

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};

StyledThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default StyledThemeProvider;
