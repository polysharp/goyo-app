/* eslint-disable no-param-reassign */
import { types } from 'mobx-state-tree';

const User = types
  .model('User', {
    bearer: '',
    email: '',
    isAuthenticated: false,
  })
  .views(() => ({}))
  .actions((self) => ({
    onAuth(token) {
      localStorage.setItem('token', token);
      self.bearer = token;
      self.isAuthenticated = true;
    },
    signOut() {
      localStorage.removeItem('token');
      self.bearer = '';
      self.email = '';
      self.isAuthenticated = false;
    },
    populateUser(data) {
      self.email = data.me.email;
    },
  }));

export default User;
