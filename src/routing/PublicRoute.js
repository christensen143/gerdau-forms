import React from 'react';

import { Route, Redirect } from 'react-router-dom';

// import { AuthContext } from '../context/AuthContext';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  // const { loggedIn } = useContext(AuthContext);
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default PublicRoute;
