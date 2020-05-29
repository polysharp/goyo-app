import React from 'react';
import { observer } from 'mobx-react';

import { useStore } from '../store';
import { Board, Header, Heading } from '../components';

const StatisticsPage = () => {
  const { user } = useStore();

  return (
    <Board>
      <Header>
        <div>
          <Heading>Évolution</Heading>
        </div>
        <div>
          <h2>Button</h2>
        </div>
      </Header>
      {user.email && <h1>{user.email}</h1>}
    </Board>
  );
};

export default observer(StatisticsPage);
