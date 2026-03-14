import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  // Logic to check authentication
  const isAuthenticated = !!localStorage.getItem("token"); 

  // If authenticated, render the child routes (Outlet)
  // If not, redirect to login
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}