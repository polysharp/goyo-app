import React from 'react';
import { observer } from 'mobx-react';

import { useQuery } from '@apollo/react-hooks';

import { USER } from '../graphql';
import { useStore } from '../store';
import { Board } from '../components';

const DashboardPage = () => {
  const store = useStore();

  const { loading, error } = useQuery(USER.ME_QUERY, {
    onCompleted: (data) => store.user.populate(data),
  });

  return (
    <Board>
      {loading && <span>LOADING</span>}
      {store.user.email && <h1>{store.user.email}</h1>}
      {error && <span>{JSON.stringify(error, null, 2)}</span>}
    </Board>
  );
};

export default observer(DashboardPage);
