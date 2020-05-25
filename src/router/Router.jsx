import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { observer } from 'mobx-react';

import { useStore } from '../store';

const AuthRouter = React.lazy(() => import('./AuthRouter'));
const AppRouter = React.lazy(() => import('./AppRouter'));

const Router = () => {
  const [init, setInit] = useState(false);

  const {
    user: { isAuthenticated, onAuth, onLogout },
  } = useStore();

  useEffect(() => {
    const onFocus = () => {
      const token = localStorage.getItem('token');
      if (token) {
        onAuth({ token });
      } else {
        onLogout();
      }

      setInit(true);
    };

    window.addEventListener('focus', onFocus);
    window.addEventListener('load', onFocus);

    return () => {
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('load', onFocus);
    };
  }, [onAuth, onLogout]);

  if (!init) return null;

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <React.Suspense fallback={<h1>Loading App router</h1>}>
          <AppRouter />
        </React.Suspense>
      ) : (
        <React.Suspense fallback={<h1>Loading Auth router</h1>}>
          <AuthRouter />
        </React.Suspense>
      )}
    </BrowserRouter>
  );
};

export default observer(Router);
