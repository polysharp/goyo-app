import React from 'react';
import ReactDOM from 'react-dom';

import 'mobx-react/batchingForReactDom';
import { ApolloProvider } from '@apollo/react-hooks';
// import { ThemeProvider } from 'styled-components';

import { StoreProvider } from './store';
import { apolloClient } from './graphql';
import { ThemeManagerProvider, StyledThemeProvider, GlobalStyle } from './theme';

import './locales/i18n';
import './theme/font-awesome';
import './styles/tailwind.generated.css';

import Router from './router/Router';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <StoreProvider>
        <ThemeManagerProvider>
          <StyledThemeProvider>
            <GlobalStyle />
            <Router />
          </StyledThemeProvider>
        </ThemeManagerProvider>
      </StoreProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
