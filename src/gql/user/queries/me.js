import gql from 'graphql-tag';

const ME = gql`
  query Me {
    me {
      email
    }
  }
`;

export default ME;
