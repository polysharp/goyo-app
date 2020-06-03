import React from 'react';
import { observer } from 'mobx-react';

import { useStore } from 'store';

import { Heading, toasts } from 'components';
import { Board, BoardHeader } from '../shared';

const Table = () => (
  <div className="flex flex-col">
    <div className="overflow-x-auto">
      <div className="min-w-full align-middle border rounded">
        <table className="min-w-full">
          <thead>
            <tr className="bg-white">
              <th className="px-4 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase border-b rounded-tl">
                Name
              </th>
              <th className="px-4 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase border-b">
                Locataire
              </th>
              <th className="px-4 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase border-b">
                Facture
              </th>
              <th className="px-4 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase border-b">
                Montant
              </th>
              <th className="px-4 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase border-b">
                Date
              </th>
              <th className="px-4 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase border-b rounded-tr">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="px-4 py-4 whitespace-no-wrap border-b">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium leading-5 text-gray-900">Bernard Lane</div>
                    <div className="text-sm leading-5 text-gray-500">bernardlane@example.com</div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 whitespace-no-wrap border-b">
                <div className="text-sm leading-5 text-gray-900">28 Place de la bourse</div>
                <div className="text-sm leading-5 text-gray-500">Paris</div>
              </td>
              <td className="px-4 py-4 whitespace-no-wrap border-b">
                <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                  Payée
                </span>
              </td>
              <td className="px-4 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap border-b">
                1 200€
              </td>
              <td className="px-4 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b">
                10/05
              </td>
              <td className="px-4 py-4 text-sm font-medium leading-5 whitespace-no-wrap border-b">
                <a href="/renters" className="text-indigo-600 hover:text-indigo-900">
                  Edit
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 whitespace-no-wrap border-b">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1571512599285-9ac4fdf3dba9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium leading-5 text-gray-900">Jean Michelle</div>
                    <div className="text-sm leading-5 text-gray-500">jeanmichelle@example.com</div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 whitespace-no-wrap border-b">
                <div className="text-sm leading-5 text-gray-900">3 Allé des Pommiers</div>
                <div className="text-sm leading-5 text-gray-500">Lyon</div>
              </td>
              <td className="px-4 py-4 whitespace-no-wrap border-b">
                <span className="inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full">
                  Inpayé
                </span>
              </td>
              <td className="px-4 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap border-b">
                30 000€
              </td>
              <td className="px-4 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b">
                20/04
              </td>
              <td className="px-4 py-4 text-sm font-medium leading-5 whitespace-no-wrap border-b">
                <a href="/renters" className="text-indigo-600 hover:text-indigo-900">
                  Edit
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 whitespace-no-wrap rounded-bl">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium leading-5 text-gray-900">Kevin Durand</div>
                    <div className="text-sm leading-5 text-gray-500">kevindurand@example.com</div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 whitespace-no-wrap">
                <div className="text-sm leading-5 text-gray-900">18 bis rue des Monteau </div>
                <div className="text-sm leading-5 text-gray-500">Courneuve</div>
              </td>
              <td className="px-4 py-4 whitespace-no-wrap">
                <span className="inline-flex px-2 text-xs font-semibold leading-5 text-orange-800 bg-orange-100 rounded-full">
                  Retard
                </span>
              </td>
              <td className="px-4 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">900€</td>
              <td className="px-4 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap">
                05/04
              </td>
              <td className="px-4 py-4 text-sm font-medium leading-5 whitespace-no-wrap rounded-br">
                <a href="/renters" className="text-indigo-600 hover:text-indigo-900">
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

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
      <div className="pt-20">
        <div className="grid grid-cols-4 grid-rows-2 xl:grid-rows-1">
          <div className="col-span-4 pl-1 pr-1 xl:col-span-3">
            <Table />
          </div>
          <div className="col-span-4 pt-2 pl-1 pr-1 xl:pt-0 xl:col-span-1">
            <div className="w-full h-full bg-white border rounded">Paiement a venir</div>
          </div>
        </div>
      </div>
    </Board>
  );
};

export default observer(DashboardPage);
