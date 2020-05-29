import React from 'react';
import { observer } from 'mobx-react';

import { useStore } from '../store';
import { Board, Header, Heading } from '../components';

const PropertiesPage = () => {
  const { user } = useStore();

  return (
    <Board>
      <Header>
        <div>
          <Heading>Propriétés (5)</Heading>
        </div>
        <div>
          <h2>Button</h2>
        </div>
      </Header>
      {user.email && <h1>{user.email}</h1>}
    </Board>
  );
};

export default observer(PropertiesPage);
