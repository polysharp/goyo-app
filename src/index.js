import React from 'react';
import ReactDOM from 'react-dom';

import 'mobx-react/batchingForReactDom';
import { ApolloProvider } from '@apollo/react-hooks';

import { StoreContextProvider } from 'store';
import client from 'gql/client';
import { ThemeContextProvider, ThemeProvider } from 'theme';

import 'translation/i18n';
import 'styles/font-awesome';
import 'styles/tailwind.generated.css';

import { GlobalStyle } from 'components';
import Router from './router/Router';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <StoreContextProvider>
        <ThemeContextProvider>
          <ThemeProvider>
            <GlobalStyle />
            <Router />
          </ThemeProvider>
        </ThemeContextProvider>
      </StoreContextProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
