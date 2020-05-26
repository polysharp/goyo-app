import ApolloClient from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri:
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_API_PROD
      : process.env.REACT_APP_API_DEV,
  credentials: 'include',
  onError: ({ networkError }) => {
    if (networkError && networkError.statusCode === 401) {
      document.cookie = `${process.env.REACT_APP_AUTH_COOKIE}=;expires=Thu, 2 Aug 2001 20:47:11 UTC;`;
      window.location = '/';
    }
  },
});

export default apolloClient;
