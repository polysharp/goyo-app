import React from 'react';
import { observer } from 'mobx-react';

import { useStore } from '../store';
import { Board, Header, Heading } from '../components';

const RentersPage = () => {
  const { user } = useStore();

  return (
    <Board>
      <Header>
        <div>
          <Heading>Locataire (2)</Heading>
        </div>
        <div>
          <h2>Button</h2>
        </div>
      </Header>
      {user.email && <h1>{user.email}</h1>}
    </Board>
  );
};

export default observer(RentersPage);
