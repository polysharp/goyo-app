import { types } from 'mobx-state-tree';
import User from './models';

const RootStore = types.model({
  user: User,
});

const store = RootStore.create({ user: {} });

export default store;
