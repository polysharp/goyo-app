import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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

const DashboardPage = ({ store, client: apolloClient }) => {
  const { signOut, populateUser } = store.user;

  const { loading, error } = useQuery(ME_QUERY, {
    onCompleted: (data) => {
      populateUser(data);
    },
  });

  useEffect(() => {
    return () => {
      apolloClient.cache.reset();
    };
  }, []);

  return (
    <Layout>
      <Menu />
      <Board>
        {loading && <span>LOADING</span>}
        {error && <span>{JSON.stringify(error, null, 2)}</span>}
        <button type="button" onClick={() => signOut()}>
          LOG OUT
        </button>
      </Board>
    </Layout>
  );
};

DashboardPage.propTypes = {
  store: PropTypes.shape({
    user: PropTypes.shape({
      signOut: PropTypes.func,
      populateUser: PropTypes.func,
    }),
  }).isRequired,
  client: PropTypes.shape({
    cache: PropTypes.object,
  }).isRequired,
};

export default withApollo(inject('store')(observer(DashboardPage)));
