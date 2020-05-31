import React from 'react';
import { observer } from 'mobx-react';

import { useStore } from 'store';

import { Heading } from 'components';
import { Board, BoardHeader } from '../shared';

const StatisticsPage = () => {
  const { user } = useStore();

  return (
    <Board>
      <BoardHeader>
        <div>
          <Heading>Évolution</Heading>
        </div>
        <div>
          <h2>Button</h2>
        </div>
      </BoardHeader>
      {user.email && <h1>{user.email}</h1>}
    </Board>
  );
};

export default observer(StatisticsPage);
