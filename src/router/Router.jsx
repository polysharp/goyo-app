import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { observer } from 'mobx-react';

import { useStore } from 'store';
import { localStorageContainsKey } from 'utils';

const AuthRouter = React.lazy(() => import('./components/auth/Auth'));
const AppRouter = React.lazy(() => import('./components/app/App'));

const Router = () => {
  const [init, setInit] = useState(false);

  const {
    user: { signed, sign, unsign },
  } = useStore();

  useEffect(() => {
    if (localStorageContainsKey('user')) sign();
    else unsign();

    const onFocus = () => {
      if (localStorageContainsKey('user')) sign();
      else unsign();
    };

    window.addEventListener('focus', onFocus);
    window.addEventListener('load', onFocus);
    window.addEventListener('storage', onFocus);
    setInit(true);

    return () => {
      window.removeEventListener('storage', onFocus);
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
