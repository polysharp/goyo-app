import ApolloClient from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri:
    process.env.NODE_ENV === 'production'
      ? 'https://goyo-api.herokuapp.com/'
      : 'http://localhost:3001',
  credentials: 'include',
  request: (operation) => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token || '',
      },
    });
  },
  onError: ({ graphQLErrors }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message }) => {
        if (message === 'Access denied.') {
          localStorage.clear();
          window.location = '/';
        }
        return message;
      });
  },
});

export default apolloClient;
