import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import { SignInForm, SignUpForm } from '../components';

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

const AuthPage = ({ store }) => {
  const { onAuth } = store.user;
  const [authType, setAuthType] = useState('signIn');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      onAuth(token);
    }
  }, [onAuth]);

  const onSignInError = (error) => {
    console.log(error);
    // TODO: handle gql error
  };

  const onSignInCompleted = (data) => {
    const { token } = authType === 'signIn' ? data.signIn : data.signUp;
    localStorage.setItem('token', token);
    onAuth(token);
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

AuthPage.propTypes = {
  store: PropTypes.shape({
    user: PropTypes.shape({
      onAuth: PropTypes.func,
    }),
  }).isRequired,
};

export default inject('store')(observer(AuthPage));
