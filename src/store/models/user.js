/* eslint-disable no-param-reassign */
import { types } from 'mobx-state-tree';

const user = types
  .model('User', {
    signed: false,
    email: '',
  })
  .views(() => ({}))
  .actions((self) => ({
    sign() {
      self.signed = true;
    },
    unsign() {
      localStorage.removeItem('user');
      self.signed = false;
    },
    populate(data) {
      self.email = data.me.email;
    },
  }));

export default user;
