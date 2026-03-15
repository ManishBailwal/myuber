import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({allowedRoles}) {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  // Authentication check
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Authorization check
  if(allowedRoles && !allowedRoles.includes(role)){

    return <Navigate  to="/login" replace/>

  }

  return <Outlet />;

  
}