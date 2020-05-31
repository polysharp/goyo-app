import { useContext } from 'react';
import { ThemeContext } from 'theme/components';

import { themeNames, themeWithName } from '../utils';

/**
 * Return an object to access theme properties and methods.
 * @returns {{
 * theme: string,
 * setTheme: (name: string) => {},
 * themeNames: string[],
 * themeWithName: (name: string) => {}
 * }} Theme hook
 */
const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return { theme, setTheme, themeNames, themeWithName };
};

export default useTheme;
