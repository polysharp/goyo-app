/* eslint-disable global-require */
import { types } from 'mobx-state-tree';
import { connectReduxDevtools } from 'mst-middlewares';
import User from './models';

const RootStore = types.model('RootStore', {
  user: User,
});

const rootStore = RootStore.create({ user: {} });

if (process.env.NODE_ENV !== 'production') {
  connectReduxDevtools(require('remotedev'), rootStore);
}

export default rootStore;
