import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { ThemeManagerContext } from './ThemeManagerContext';
import { getSchemeWithName } from '../schemes';

const StyledThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeManagerContext);
  const currentTheme = getSchemeWithName(theme);

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};

StyledThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default StyledThemeProvider;