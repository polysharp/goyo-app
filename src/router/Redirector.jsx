import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, useLocation } from 'react-router-dom';

const Redirector = ({ isAuthenticated }) => {
  const location = useLocation();

  if (isAuthenticated) {
    return (
      <Route path="*">
        <Redirect to={location.next ? location.next : '/'} />
      </Route>
    );
  }

  return (
    <Route path="*">
      <Redirect to={{ pathname: '/auth/signin', next: location.pathname }} />
    </Route>
  );
};

Redirector.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Redirector;
