import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Auth from '../pages/Auth';
import Dashboard from '../pages/Dashboard';

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
      <Switch>
        {!isAuthenticated && <Route path="/auth" component={Auth} />}
        {isAuthenticated && <Route exact path="/" component={Dashboard} />}
        <Route path="*">
          {isAuthenticated && <Redirect to="/" />}
          {!isAuthenticated && <Redirect to="/auth" />}
        </Route>
      </Switch>
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