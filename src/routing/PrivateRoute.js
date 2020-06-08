import React, { useContext } from 'react';

import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

const PrivateRoute = (props) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
};

export default PrivateRoute;
