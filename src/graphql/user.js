import gql from 'graphql-tag';

const SIGN_IN_MUTATION = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(user: { email: $email, password: $password }) {
      token
      expiresIn
    }
  }
`;

const SIGN_UP_MUTATION = gql`
  mutation SignUp(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $language: String!
    $currency: String!
  ) {
    signUp(
      user: {
        email: $email
        password: $password
        firstName: $firstName
        lastName: $lastName
        language: $language
        currency: $currency
      }
    ) {
      token
      expiresIn
    }
  }
`;

const ME_QUERY = gql`
  query Me {
    me {
      email
    }
  }
`;

const USER = {
  SIGN_IN_MUTATION,
  SIGN_UP_MUTATION,
  ME_QUERY,
};

export default USER;
