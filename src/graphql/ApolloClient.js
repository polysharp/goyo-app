import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';

const httpLink = createHttpLink({
  uri:
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_API_PROD
      : process.env.REACT_APP_API_DEV,
  credentials: 'include',
});

const errorLink = onError(({ networkError }) => {
  if (networkError && networkError.statusCode === 401) {
    localStorage.removeItem('user');
  }
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: localStorage.getItem('user') || null,
    },
  }));

  return forward(operation);
});

const refreshMiddleware = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    const {
      response: { headers },
    } = operation.getContext();

    if (headers) {
      const token = headers.get('authorization');
      if (token) {
        console.log('Apollo - Refreshing client token');
        localStorage.setItem('user', token);
      }
    }

    return response;
  });
});

const link = ApolloLink.from([refreshMiddleware, authMiddleware, errorLink, httpLink]);

export default new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
