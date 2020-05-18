import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import { SignInForm, SignUpForm } from '../components';

const SIGN_IN_QUERY = gql`
  mutation($email: String!, $password: String!) {
    signIn(user: { email: $email, password: $password }) {
      user {
        email
      }
      token
    }
  }
`;

const SIGN_UP_QUERY = gql`
  mutation($email: String!, $password: String!) {
    signUp(user: { email: $email, password: $password }) {
      user {
        email
      }
      token
    }
  }
`;

const AuthPage = () => {
  const [authType, setAuthType] = useState('signIn');

  const onSignInError = (error) => {
    console.log(error);
    // TODO: handle gql error
  };

  const onSignInCompleted = (data) => {
    if (authType === 'signIn') localStorage.setItem('token', data.signIn.token);
    else localStorage.setItem('token', data.signUp.token);

    // TODO: navigate to dashboard
  };

  const [auth, { error }] = useMutation(authType === 'signIn' ? SIGN_IN_QUERY : SIGN_UP_QUERY, {
    onCompleted: onSignInCompleted,
    onError: onSignInError,
  });

  return (
    <div>
      {authType === 'signIn' && (
        <SignInForm
          switchToSignUp={() => setAuthType('signUp')}
          signIn={(email, password) => auth({ variables: { email, password } })}
        />
      )}
      {authType === 'signUp' && (
        <SignUpForm
          switchToSignIn={() => setAuthType('signIn')}
          signUp={(email, password) => auth({ variables: { email, password } })}
        />
      )}
      {error && <div>{error.graphQLErrors[0].message}</div>}
    </div>
  );
};

export default AuthPage;
