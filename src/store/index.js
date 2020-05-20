import { types } from 'mobx-state-tree';
import User from './models';

const RootStore = types.model('RootStore', {
  user: User,
});

const store = RootStore.create({ user: {} });

export default store;
