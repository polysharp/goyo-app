import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { observer } from 'mobx-react';

import { useStore } from 'store';
import { localStorageContainsKey } from 'utils';
import { ToastContainer } from 'components';

const AuthRouter = React.lazy(() => import('./components/auth/Auth'));
const AppRouter = React.lazy(() => import('./components/app/App'));

const Router = () => {
  const [init, setInit] = useState(false);

  const { user } = useStore();

  useEffect(() => {
    if (localStorageContainsKey('user')) user.sign();
    else user.unsign();

    const onFocus = () => {
      if (localStorageContainsKey('user')) user.sign();
      else user.unsign();
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
  }, [user]);

  if (!init) return null;

  return (
    <BrowserRouter>
      {user.signed ? (
        <React.Suspense fallback={<div />}>
          <AppRouter />
        </React.Suspense>
      ) : (
        <React.Suspense fallback={<div />}>
          <AuthRouter />
        </React.Suspense>
      )}
      <ToastContainer />
    </BrowserRouter>
  );
};

export default observer(Router);
