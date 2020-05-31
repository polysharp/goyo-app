/* eslint-disable no-unused-vars */
import { createContext } from 'react';

const ThemeContext = createContext({
  theme: '',
  /**
   * @param {string} name Update the theme with theme name
   */
  setTheme: (name) => undefined,
});

export default ThemeContext;
