import ApolloClient from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri: 'https://goyo-api.herokuapp.com/',
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
