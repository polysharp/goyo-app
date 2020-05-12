import { types } from 'mobx-state-tree';
import Todo from './models';

const RootStore = types.model({
  todos: types.optional(types.array(Todo), []),
});

const store = RootStore.create({ todos: [] });

export default store;
