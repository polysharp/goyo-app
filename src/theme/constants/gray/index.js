import global from '../shared';
import nav from './nav';
import modal from './modal';
import dropdown from './dropdown';

const theme = {
  global: { ...global },
  nav: { ...nav },
  modal: { ...modal },
  dropdown: { ...dropdown },
  '100': '#f7fafc',
  '200': '#edf2f7',
  '300': '#e2e8f0',
  '400': '#cbd5e0',
  '500': '#a0aec0',
  '600': '#718096',
  '700': '#4a5568',
  '800': '#2d3748',
  '900': '#1a202c',
  outline: '#2d3748',
};

export default theme;
