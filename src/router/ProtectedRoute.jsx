import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isAuth = false;

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ component: Component, path, exact }) => (
  <Route
    exact={exact}
    path={path}
    // eslint-disable-next-line react/jsx-props-no-spreading
    render={(props) => (isAuth ? <Component {...props} /> : <Redirect to="/auth" />)}
  />
);

export default ProtectedRoute;
