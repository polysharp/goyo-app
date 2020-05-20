import { types } from 'mobx-state-tree';
import { connectReduxDevtools } from 'mst-middlewares';
import User from './models';

const RootStore = types.model('RootStore', {
  user: User,
});

const store = RootStore.create({ user: {} });

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  connectReduxDevtools(require('remotedev'), store);
}

export default store;
