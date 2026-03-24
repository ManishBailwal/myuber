import React, { useEffect, useState } from "react";
import { FaMotorcycle, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function RiderDashboard() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
    } catch (err) {
      console.error("Invalid user data");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Welcome, {user?.name || "Rider"} 👋
        </h1>

        <Link to="/request-ride" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Request Ride
        </Link>
      </div>

      {/* 👤 Profile Card */}
      <div className="bg-white p-5 rounded-xl shadow mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        
        <div>
          <h2 className="text-xl font-semibold">{user?.name}</h2>
          <p className="text-gray-600">{user?.email}</p>
          <p className="text-gray-600">{user?.phone}</p>
        </div>

        <span className="mt-3 md:mt-0 bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
          {user?.role}
        </span>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        <div className="bg-white p-5 rounded-xl shadow">
          <FaMotorcycle className="text-blue-500 text-xl mb-2"/>
          <h2 className="text-lg font-semibold">Total Rides</h2>
          <p className="text-gray-600 text-xl font-bold">24</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <FaMapMarkerAlt className="text-green-500 text-xl mb-2"/>
          <h2 className="text-lg font-semibold">Current Location</h2>
          <p className="text-gray-600">Dehradun</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <FaClock className="text-purple-500 text-xl mb-2"/>
          <h2 className="text-lg font-semibold">Ride History</h2>
          <p className="text-gray-600">View past trips</p>
        </div>

      </div>

      {/* Ride History Table */}
      <div className="bg-white rounded-xl shadow p-5 overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4">Recent Rides</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="py-2">Date</th>
              <th>Pickup</th>
              <th>Drop</th>
              <th>Fare</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-2">12 Mar</td>
              <td>ISBT</td>
              <td>Rajpur</td>
              <td>₹220</td>
            </tr>

            <tr className="border-b">
              <td className="py-2">10 Mar</td>
              <td>Clock Tower</td>
              <td>Premnagar</td>
              <td>₹180</td>
            </tr>
          </tbody>

        </table>
      </div>

    </div>
  );
}