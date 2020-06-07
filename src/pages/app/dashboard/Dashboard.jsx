import React from 'react';
import { observer } from 'mobx-react';

import { useStore } from 'store';

import { Board } from '../shared';
import { Metrics, Expenses, Incomes, Rents } from './components';

const DashboardPage = () => {
  const { user } = useStore();

  return (
    <Board>
      <div className="grid gap-6 p-6 xl:h-full xl:grid-cols-12 xl:grid-rows-6">
        <Metrics />
        <Incomes />
        <Expenses />
        <Rents />
      </div>
    </Board>
  );
};

export default observer(DashboardPage);
