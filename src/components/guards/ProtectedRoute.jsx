import React from 'react';
import { Routes, Route, Link, Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProtectedRoute({ user, redirectPath = '/landing' }) {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}

ProtectedRoute.propTypes = {
  user: PropTypes.object,
  redirectPath: PropTypes.string,
};

export default ProtectedRoute;
