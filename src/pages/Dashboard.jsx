import React from 'react';
import { observer } from 'mobx-react';

import { useStore } from '../store';
import { Board, Heading, Header } from '../components';

const DashboardPage = () => {
  const { user } = useStore();

  return (
    <Board>
      <Header>
        <div>
          <Heading>Tableau de bords</Heading>
        </div>
        <div>
          <h2>Button</h2>
        </div>
      </Header>
      {user.email && <h1>{user.email}</h1>}
    </Board>
  );
};

export default observer(DashboardPage);
