import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const ME_QUERY = gql`
  query {
    me {
      email
    }
  }
`;

const Dashboard = () => {
  const { loading, error, data } = useQuery(ME_QUERY);

  return (
    <main className="min-w-full min-h-screen bg-teal-900">
      <div className="fixed inset-y-0 left-0 w-16" />
      <div
        className="relative min-h-screen bg-white rounded-tl-lg rounded-bl-lg shadow-lg"
        style={{ width: 'calc(100% - 70px)', marginLeft: '70px' }}
      >
        {data && <span>{JSON.stringify(data, null, 2)}</span>}
        {loading && <span>LOADING</span>}
        {error && <span>{JSON.stringify(error, null, 2)}</span>}
      </div>
    </main>
  );
};

export default Dashboard;
