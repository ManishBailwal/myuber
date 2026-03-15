import React from "react";
import { FaUsers, FaCar, FaMoneyBillWave, FaChartLine } from "react-icons/fa";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Export Reports
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

        <div className="bg-white p-5 rounded-xl shadow">
          <FaUsers className="text-blue-500 text-xl mb-2"/>
          <h2 className="font-semibold">Total Users</h2>
          <p className="text-2xl font-bold">2,450</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <FaCar className="text-green-500 text-xl mb-2"/>
          <h2 className="font-semibold">Active Drivers</h2>
          <p className="text-2xl font-bold">320</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <FaMoneyBillWave className="text-purple-500 text-xl mb-2"/>
          <h2 className="font-semibold">Today's Revenue</h2>
          <p className="text-2xl font-bold">₹45,000</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <FaChartLine className="text-orange-500 text-xl mb-2"/>
          <h2 className="font-semibold">Total Trips</h2>
          <p className="text-2xl font-bold">1,240</p>
        </div>

      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow p-5 overflow-x-auto mb-6">
        <h2 className="text-lg font-semibold mb-4">Recent Users</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="py-2">Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-b">
              <td className="py-2">Rahul Sharma</td>
              <td>rahul@gmail.com</td>
              <td>Driver</td>
              <td className="text-green-600 font-semibold">Active</td>
            </tr>

            <tr className="border-b">
              <td className="py-2">Anita Singh</td>
              <td>anita@gmail.com</td>
              <td>Rider</td>
              <td className="text-green-600 font-semibold">Active</td>
            </tr>

            <tr>
              <td className="py-2">Mohit Verma</td>
              <td>mohit@gmail.com</td>
              <td>Driver</td>
              <td className="text-red-500 font-semibold">Suspended</td>
            </tr>

          </tbody>
        </table>
      </div>

      {/* Ride Monitoring */}
      <div className="bg-white rounded-xl shadow p-5">
        <h2 className="text-lg font-semibold mb-4">Live Ride Monitoring</h2>

        <div className="flex flex-col md:flex-row justify-between items-center border p-4 rounded-lg mb-3">

          <div>
            <p className="font-semibold">Driver: Amit Kumar</p>
            <p className="text-gray-600">Pickup: ISBT → Drop: Mussoorie</p>
          </div>

          <div className="mt-3 md:mt-0">
            <button className="bg-red-500 text-white px-3 py-1 rounded">
              Cancel Ride
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}