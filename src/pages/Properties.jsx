import React from 'react';
import { observer } from 'mobx-react';

import { useStore } from '../store';
import { Board } from '../components';

const PropertiesPage = () => {
  const { user } = useStore();

  return <Board>{user.email && <h1>{user.email}</h1>}</Board>;
};

export default observer(PropertiesPage);
