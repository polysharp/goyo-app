import global from '../shared';
import nav from './nav';
import modal from './modal';
import dropdown from './dropdown';

const theme = {
  global: { ...global },
  nav: { ...nav },
  modal: { ...modal },
  dropdown: { ...dropdown },
  '100': '#faf5ff',
  '200': '#e9d8fd',
  '300': '#d6bcfa',
  '400': '#b794f4',
  '500': '#9f7aea',
  '600': '#805ad5',
  '700': '#6b46c1',
  '800': '#553c9a',
  '900': '#44337a',
  outline: '#9f7aea',
  primary: '#9f7aea',
};

export default theme;
