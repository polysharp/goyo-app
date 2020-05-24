/* eslint-disable no-param-reassign */
import { types } from 'mobx-state-tree';

const User = types
  .model('User', {
    token: '',
    expiresIn: 0,
    isAuthenticated: false,
    email: '',
  })
  .views(() => ({}))
  .actions((self) => ({
    onAuth({ token, expiresIn }) {
      localStorage.setItem('token', token);

      if (expiresIn) {
        localStorage.setItem('expiresIn', `${expiresIn}`);
        self.expiresIn = expiresIn;
      }

      self.token = token;
      self.isAuthenticated = true;
    },
    onLogout() {
      localStorage.clear();
      self.token = '';
      self.expiresIn = 0;
      self.isAuthenticated = false;
    },
    populate(data) {
      self.email = data.me.email;
    },
  }));

export default User;
