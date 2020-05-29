import gray from './gray';
import teal from './teal';
import indigo from './indigo';

const getSchemeNames = ['gray', 'teal', 'indigo'];

const getSchemeWithName = (name) => {
  switch (name) {
    case 'gray':
      return gray;
    case 'teal':
      return teal;
    case 'indigo':
      return indigo;
    default:
      return gray;
  }
};

export { getSchemeNames, getSchemeWithName };