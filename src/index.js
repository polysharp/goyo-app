import React from 'react';
import ReactDOM from 'react-dom';

import 'mobx-react/batchingForReactDom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';

import { StoreProvider } from './store';
import { apolloClient } from './graphql';
import theme from './theme';

import './locales/i18n';
import './styles/tailwind.generated.css';

const Router = React.lazy(() => import('./router/Router'));

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <StoreProvider>
        <ThemeProvider theme={theme}>
          <React.Suspense fallback={<h1>Loading App router</h1>}>
            <Router />
          </React.Suspense>
        </ThemeProvider>
      </StoreProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
