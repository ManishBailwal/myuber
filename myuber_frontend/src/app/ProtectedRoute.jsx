import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({ allowedRoles }) {
  const token = localStorage.getItem('token');
  let role = null;

  try {
    const user = JSON.parse(localStorage.getItem("user"));
    role = user?.role;
  } catch (err) {
    console.error("Invalid user data in localStorage");
  }

  // Authentication check
  if (!token || !role ) {
    return <Navigate to="/login" replace />;
  }

  // Authorization check
  if (allowedRoles && !allowedRoles.includes(role)) {

    return <Navigate to="/" replace />

  }

  return <Outlet />;


}