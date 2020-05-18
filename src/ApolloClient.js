import ApolloClient from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri: 'https://goyo-api.herokuapp.com/',
});

export default apolloClient;
