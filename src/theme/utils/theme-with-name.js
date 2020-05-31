import { gray, teal, indigo, pink, blue, purple } from '../constants';

/**
 * Return a theme object with the given name
 * @param {string} name Theme name
 * @return {Object} Theme Object (default: gray)
 */
const themeWithName = (name) => {
  switch (name) {
    case 'gray':
      return gray;
    case 'teal':
      return teal;
    case 'indigo':
      return indigo;
    case 'pink':
      return pink;
    case 'blue':
      return blue;
    case 'purple':
      return purple;
    default:
      return gray;
  }
};

export default themeWithName;
