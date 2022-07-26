import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks';

function ProtectedRoute(ProtectedComponent, redirectPath = '/register') {
  console.log(ProtectedComponent);
  function HOC() {
    const { token } = useAuth();
    // const user = true;
    console.log(token);
    if (!token) {
      console.log('navii');
      return <Navigate to={redirectPath} replace />;
    }

    return <ProtectedComponent />;
  }
  return HOC;
}

ProtectedRoute.defaultProps = {
  redirectPath: '/register',
};

ProtectedRoute.propTypes = {
  ProtectedComponent: PropTypes.node.isRequired,
  redirectPath: PropTypes.string,
};

export default ProtectedRoute;
