// router.jsx
import React from 'react'; // Add this just in case
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/Login';
import RiderDashboard from '../pages/RiderDashboard';
import DriverDashboard from '../pages/DriverDashboard';
import ProtectedRoute from './ProtectedRoute';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />

       {/* Protected Dashboard Views */}
        <Route element={<ProtectedRoute/>}>
        <Route path="rider-dashboard" element={<RiderDashboard/>} />
        <Route path="driver-dashboard" element={<DriverDashboard/>}/>
        </Route>


      </Routes>
    </BrowserRouter>
  );
}