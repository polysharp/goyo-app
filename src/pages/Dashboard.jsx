import React from 'react';
import { observer, inject } from 'mobx-react';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from '@apollo/react-hoc';

import { Layout, Menu, Board } from '../components';

const ME_QUERY = gql`
  query Me {
    me {
      email
    }
  }
`;

const Dashboard = ({ store, client: apolloClient }) => {
  const { signOut, populateUser } = store.user;

  const { loading, error } = useQuery(ME_QUERY, {
    onCompleted: (data) => {
      populateUser(data);
    },
  });

  const handleLogout = () => {
    apolloClient.cache.reset().then(() => signOut());
  };

  return (
    <Layout>
      <Menu />
      <Board>
        {loading && <span>LOADING</span>}
        {error && <span>{JSON.stringify(error, null, 2)}</span>}
        <button type="button" onClick={() => handleLogout()}>
          LOG OUT
        </button>
      </Board>
    </Layout>
  );
};

export default withApollo(inject('store')(observer(Dashboard)));
