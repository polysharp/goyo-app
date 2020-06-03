import global from '../shared';
import nav from './nav';
import modal from './modal';
import dropdown from './dropdown';

const theme = {
  global: { ...global },
  nav: { ...nav },
  modal: { ...modal },
  dropdown: { ...dropdown },
  '100': '#fff5f7',
  '200': '#fed7e2',
  '300': '#fbb6ce',
  '400': '#f687b3',
  '500': '#ed64a6',
  '600': '#d53f8c',
  '700': '#b83280',
  '800': '#97266d',
  '900': '#702459',
  outline: '#ed64a6',
};

export default theme;
