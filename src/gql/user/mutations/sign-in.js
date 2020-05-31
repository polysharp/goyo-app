import gql from 'graphql-tag';

const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(user: { email: $email, password: $password })
  }
`;

export default SIGN_IN;
