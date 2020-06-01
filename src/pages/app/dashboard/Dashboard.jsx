import React from 'react';
import { observer } from 'mobx-react';

import { useStore } from 'store';

import { Heading, toasts } from 'components';
import { Board, BoardHeader } from '../shared';

const DashboardPage = () => {
  const { user } = useStore();

  return (
    <Board>
      <BoardHeader>
        <div>
          <Heading>Tableau de bords</Heading>
        </div>
        <div>
          <h2>Button</h2>
        </div>
      </BoardHeader>
      {user.email && <h1>{user.email}</h1>}
      <div className="flex flex-col items-center pt-20">
        <button
          type="button"
          className="bg-gray-200"
          onClick={() => toasts.success('Changemenet sauvegardé !')}
        >
          Success notification
        </button>
        <button
          type="button"
          className="bg-gray-200"
          onClick={() => toasts.info('Jean-Michelle à payé son loyer.')}
        >
          Info notification
        </button>
        <button
          type="button"
          className="bg-gray-200"
          onClick={() => toasts.warning('Micheline quitte bientôt son appartement')}
        >
          Warning notification
        </button>
      </div>
    </Board>
  );
};

export default observer(DashboardPage);
