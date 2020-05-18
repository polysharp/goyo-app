import ApolloClient from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri: 'https://goyo-api.herokuapp.com/',
  headers: {
    authorization: localStorage.getItem('token'),
  },
});

export default apolloClient;
