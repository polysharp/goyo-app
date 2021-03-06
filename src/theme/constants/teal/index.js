import global from '../shared';
import nav from './nav';
import modal from './modal';
import dropdown from './dropdown';

const theme = {
  global: { ...global },
  nav: { ...nav },
  modal: { ...modal },
  dropdown: { ...dropdown },
  '100': '#e6fffa',
  '200': '#b2f5ea',
  '300': '#81e6d9',
  '400': '#4fd1c5',
  '500': '#38b2ac',
  '600': '#319795',
  '700': '#2c7a7b',
  '800': '#285e61',
  '900': '#234e52',
  outline: '#38b2ac',
  primary: '#38b2ac',
};

export default theme;
