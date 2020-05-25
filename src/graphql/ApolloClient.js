import ApolloClient from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri:
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_API_PROD
      : process.env.REACT_APP_API_DEV,
  credentials: 'include',
  onError: ({ networkError }) => {
    if (networkError && networkError.statusCode === 401) {
      document.cookie = `cookiename=${process.env.REACT_APP_AUTH_COOKIE};expires=1998-05-10T00:00:00Z`;
      window.location = '/';
    }
  },
});

export default apolloClient;
