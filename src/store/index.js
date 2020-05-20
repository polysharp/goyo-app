/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import React from 'react';
import { types } from 'mobx-state-tree';
import { connectReduxDevtools } from 'mst-middlewares';
import User from './models';

const storeContext = React.createContext();

const RootStore = types.model('RootStore', {
  user: User,
});

const rootStore = RootStore.create({ user: {} });

const StoreProvider = ({ children }) => (
  <storeContext.Provider value={rootStore}>{children}</storeContext.Provider>
);
const useStore = () => React.useContext(storeContext) || null;

if (process.env.NODE_ENV !== 'production') {
  connectReduxDevtools(require('remotedev'), rootStore);
}

export { useStore, StoreProvider };
