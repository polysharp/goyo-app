import React from 'react';
import { observer } from 'mobx-react';

import { useStore } from 'store';

import { Board } from '../shared';
import { Incomes, Rents } from './components';

const DashboardPage = () => {
  const { user } = useStore();

  return (
    <Board>
      <div className="grid w-full h-full grid-cols-8 grid-rows-6 gap-4 xl:grid-cols-12">
        <div className="col-span-8 row-span-1 mt-4 ml-4 mr-4 xl:mr-0">
          <div className="h-full max-h-full bg-white border rounded ">
            <Incomes />
          </div>
        </div>
        <div className="col-span-4 row-span-3 ml-4 xl:ml-0 xl:mt-4 xl:mr-4">
          <div className="h-full max-h-full bg-white border rounded">Objectif progress</div>
        </div>
        <div className="col-span-8 row-span-5 mb-4 ml-4 mr-4 xl:mb-4 xl:mr-0 xl:mb-0">
          <div className="h-full max-h-full bg-white border rounded">
            <Rents />
          </div>
        </div>
        <div className="col-span-4 col-start-5 row-span-3 row-start-2 mr-4 xl:mb-4 xl:row-start-4 xl:col-start-9">
          <div className="h-full max-h-full bg-white border rounded">Graphiques</div>
        </div>
      </div>
    </Board>
  );
};

export default observer(DashboardPage);
