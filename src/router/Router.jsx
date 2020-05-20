import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const Router = ({ store }) => {
  const { isAuthenticated, onAuth } = store.user;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      onAuth(token);
    }
  }, [onAuth]);

  return (
    <BrowserRouter>
      <div>hello</div>
    </BrowserRouter>
  );
};

Router.propTypes = {
  store: PropTypes.shape({
    user: PropTypes.shape({
      isAuthenticated: PropTypes.bool,
      onAuth: PropTypes.func,
    }),
  }).isRequired,
};

export default inject('store')(observer(Router));
