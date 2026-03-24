// router.jsx
import React from 'react'; // Add this just in case
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/Login';
import RiderDashboard from '../pages/RiderDashboard';
import DriverDashboard from '../pages/DriverDashboard';
import ProtectedRoute from './ProtectedRoute';
import Signup from '../pages/Signup';
import AdminDashboard from '../pages/AdminDashboard';
import RequestRide from '../pages/RequestRide';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup/>} />

       
         

       {/* Protected Dashboard Views */}


        {/* Rider Routes */}
        <Route element={<ProtectedRoute allowedRoles={["rider"]} />}>
        
           <Route path="/rider-dashboard" element={<RiderDashboard />} />
           <Route path="/request-ride" element={<RequestRide />} />
        </Route>

        {/* Driver Routes */}
        <Route element={<ProtectedRoute allowedRoles={["driver"]} />}>
        <Route path="/driver-dashboard" element={<DriverDashboard />} />
         
        </Route>

        {/* Admin Routes */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Route>


      </Routes>
    </BrowserRouter>
  );
}