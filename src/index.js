import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';

import { StoreProvider } from './store';
import { apolloClient } from './graphql';
import theme from './theme';

import './locales/i18n';
import './styles/tailwind.generated.css';

import Router from './router/Router';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <StoreProvider>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </StoreProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
