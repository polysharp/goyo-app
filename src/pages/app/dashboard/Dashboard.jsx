import React from 'react';
import { observer } from 'mobx-react';

import { useStore } from 'store';

import { Board } from '../shared';
import { Incomes, Rents } from './components';

const DashboardPage = () => {
  const { user } = useStore();

  return (
    <Board>
      <div className="grid w-full grid-cols-4 gap-4 grid-rows-9 xl:grid-rows-6 xl:h-full xl:grid-cols-6">
        <div className="col-span-4 row-span-1 mt-4 ml-4 mr-4 xl:mr-0">
          <div className="h-full max-h-full bg-white border rounded ">
            <Incomes />
          </div>
        </div>
        <div className="col-span-2 row-span-3 ml-4 xl:ml-0 xl:mt-4 xl:mr-4">
          <div className="h-full max-h-full bg-white border rounded">Objectif progress</div>
        </div>
        <div className="col-span-2 row-span-3 mr-4 xl:mb-4 xl:col-start-5">
          <div className="h-full max-h-full bg-white border rounded">Graphiques</div>
        </div>
        <div className="col-span-4 row-span-5 mb-4 ml-4 mr-4 xl:mb-4 xl:mr-0 xl:mb-0 xl:col-span-4 xl:row-span-5 xl:row-start-2">
          <div className="h-full max-h-full bg-white border rounded">
            <Rents />
          </div>
        </div>
      </div>
    </Board>
  );
};

export default observer(DashboardPage);
