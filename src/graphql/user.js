import gql from 'graphql-tag';

const SIGN_IN_QUERY = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(user: { email: $email, password: $password }) {
      token
    }
  }
`;

const SIGN_UP_QUERY = gql`
  mutation SignUp($email: String!, $password: String!) {
    signUp(user: { email: $email, password: $password }) {
      token
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
  SIGN_IN_QUERY,
  SIGN_UP_QUERY,
  ME_QUERY,
};

export default USER;
