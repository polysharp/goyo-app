import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';

import store from './store';
import { apolloClient } from './graphql';
import theme from './theme';

import './locales/i18n';
import './styles/tailwind.generated.css';

import Router from './router/Router';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
