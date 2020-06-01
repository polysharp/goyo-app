import { toast as reactToast } from 'react-toastify';

const toasts = {
  success: (label, options = {}) => {
    reactToast.success(label, { ...options });
  },
  warning: (label, options = {}) => {
    reactToast.warn(label, { ...options });
  },
  info: (label, options = {}) => {
    reactToast.info(label, { ...options });
  },
};

export default toasts;
