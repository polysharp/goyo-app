import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';
import { onPatch } from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';

import { ApolloProvider } from '@apollo/react-hooks';

import { ThemeProvider } from 'styled-components';

import store from './store';
import apolloClient from './ApolloClient';
import './locales/i18n';
import theme from './theme';
import './styles/tailwind.generated.css';

import App from './App';

onPatch(store, (patch) => {
  // eslint-disable-next-line no-console
  console.log(patch);
});
makeInspectable(store);

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
