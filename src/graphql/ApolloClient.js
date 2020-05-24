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
});

export default apolloClient;
