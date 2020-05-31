import gql from 'graphql-tag';

const SIGN_UP = gql`
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
    )
  }
`;

export default SIGN_UP;
