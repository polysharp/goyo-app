import global from '../shared';
import nav from './nav';
import modal from './modal';
import dropdown from './dropdown';

const theme = {
  global: { ...global },
  nav: { ...nav },
  modal: { ...modal },
  dropdown: { ...dropdown },
  '100': '#ebf4ff',
  '200': '#c3dafe',
  '300': '#a3bffa',
  '400': '#7f9cf5',
  '500': '#667eea',
  '600': '#5a67d8',
  '700': '#4c51bf',
  '800': '#434190',
  '900': '#3c366b',
  outline: '#667eea',
  typo: '#667eea',
};

export default theme;
