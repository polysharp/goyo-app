import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { observer } from 'mobx-react';

import { useLazyQuery } from '@apollo/react-hooks';

import { USER } from '../graphql';
import { useStore } from '../store';

const AuthRouter = React.lazy(() => import('./AuthRouter'));
const AppRouter = React.lazy(() => import('./AppRouter'));

const Router = () => {
  const [init, setInit] = useState(false);
  const [interval, setInterval] = useState(false);

  const {
    user: { isAuthenticated, onAuth, onLogout },
  } = useStore();

  const [refreshQuery] = useLazyQuery(USER.REFRESH_QUERY, {
    onCompleted: (data) => onAuth(data.refresh),
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    const onFocus = () => {
      const token = localStorage.getItem('token');
      if (token) {
        onAuth({ token });
      } else {
        window.clearInterval(interval);
        onLogout();
      }

      setInit(true);
    };

    window.addEventListener('focus', onFocus);
    window.addEventListener('load', onFocus);

    if (isAuthenticated && !interval) {
      const expiresIn = localStorage.getItem('expiresIn');
      const delay = expiresIn !== 'undefined' ? Number.parseInt(expiresIn, 10) : 3600000;
      const intervalTimer = window.setInterval(
        refreshQuery,
        // eslint-disable-next-line no-restricted-globals
        isNaN(delay) ? 3600000 : delay // every hour
      );
      setInterval(intervalTimer);
    }

    return () => {
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('load', onFocus);
      window.clearInterval(interval);
    };
  }, [isAuthenticated, onAuth, onLogout]);

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
