/* eslint-disable no-param-reassign */
import { types } from 'mobx-state-tree';

const Todo = types
  .model({
    name: types.optional(types.string, ''),
    done: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    toggle() {
      self.done = !self.done;
    },
  }));

export default Todo;
