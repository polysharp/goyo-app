import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { observer } from 'mobx-react';

import { useStore } from '../store';

const AuthRouter = React.lazy(() => import('./AuthRouter'));
const AppRouter = React.lazy(() => import('./AppRouter'));

const checkAccessToken = () => localStorage.getItem('user') !== null;

const Router = () => {
  const [init, setInit] = useState(false);

  const {
    user: { signed, sign, unsign },
  } = useStore();

  useEffect(() => {
    const onFocus = () => {
      if (checkAccessToken()) sign();
      else unsign();
      setInit(true);
    };

    window.addEventListener('focus', onFocus);
    window.addEventListener('load', onFocus);
    window.addEventListener('storage', onFocus);

    return () => {
      window.addEventListener('storage', onFocus);
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('load', onFocus);
    };
  }, [sign, unsign]);

  if (!init) return null;

  return (
    <BrowserRouter>
      {signed ? (
        <React.Suspense fallback={<div />}>
          <AppRouter />
        </React.Suspense>
      ) : (
        <React.Suspense fallback={<div />}>
          <AuthRouter />
        </React.Suspense>
      )}
    </BrowserRouter>
  );
};

export default observer(Router);
