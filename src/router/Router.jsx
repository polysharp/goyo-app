import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import { useStore } from '../store';

import AuthRouter from './AuthRouter';
import AppRouter from './AppRouter';

const Router = () => {
  const {
    user: { isAuthenticated, onAuth },
  } = useStore();

  useEffect(() => {
    const onFocus = () => {
      const token = localStorage.getItem('token');
      if (token) {
        onAuth(token);
      }
    };

    window.addEventListener('focus', onFocus);
    window.addEventListener('load', onFocus);

    return () => {
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('load', onFocus);
    };
  }, []);

  return isAuthenticated ? <AppRouter /> : <AuthRouter />;
};

export default observer(Router);
