import { toast as reactToast } from 'react-toastify';

const toasts = {
  success: (label) => {
    reactToast.success(label);
  },
  warning: (label) => {
    reactToast.warn(label);
  },
  info: (label) => {
    reactToast.info(label);
  },
};

export default toasts;
