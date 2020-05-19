import React from 'react';
import { observer, inject } from 'mobx-react';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from '@apollo/react-hoc';

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
    <main className="min-w-full min-h-screen bg-teal-900">
      <div className="fixed inset-y-0 left-0 w-16" />
      <div
        className="relative min-h-screen bg-white rounded-tl-lg rounded-bl-lg shadow-lg"
        style={{ width: 'calc(100% - 70px)', marginLeft: '70px' }}
      >
        {loading && <span>LOADING</span>}
        {error && <span>{JSON.stringify(error, null, 2)}</span>}
        <button type="button" onClick={() => handleLogout()}>
          LOG OUT
        </button>
      </div>
    </main>
  );
};

export default withApollo(inject('store')(observer(Dashboard)));
