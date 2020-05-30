import gray from './gray';
import teal from './teal';
import indigo from './indigo';
import pink from './pink';
import blue from './blue';
import purple from './purple';

const schemesName = ['gray', 'teal', 'indigo', 'pink', 'blue', 'purple'];

const getSchemeWithName = (name) => {
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

export { schemesName, getSchemeWithName };
