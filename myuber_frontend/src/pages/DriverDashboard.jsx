import React from "react";
import { FaCar, FaMoneyBillWave, FaStar } from "react-icons/fa";

export default function DriverDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Driver Dashboard</h1>

        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          Go Online
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        <div className="bg-white p-5 rounded-xl shadow">
          <FaCar className="text-blue-500 text-xl mb-2"/>
          <h2 className="text-lg font-semibold">Total Trips</h2>
          <p className="text-xl font-bold text-gray-700">152</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <FaMoneyBillWave className="text-green-500 text-xl mb-2"/>
          <h2 className="text-lg font-semibold">Today's Earnings</h2>
          <p className="text-xl font-bold text-gray-700">₹1,250</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <FaStar className="text-yellow-500 text-xl mb-2"/>
          <h2 className="text-lg font-semibold">Rating</h2>
          <p className="text-xl font-bold text-gray-700">4.8</p>
        </div>

      </div>

      {/* Ride Requests */}
      <div className="bg-white rounded-xl shadow p-5">
        <h2 className="text-lg font-semibold mb-4">Incoming Ride Requests</h2>

        <div className="flex flex-col md:flex-row justify-between items-center border p-4 rounded-lg mb-3">

          <div>
            <p className="font-semibold">Pickup: ISBT</p>
            <p className="text-gray-600">Drop: Mussoorie</p>
          </div>

          <div className="flex gap-2 mt-3 md:mt-0">
            <button className="bg-green-600 text-white px-3 py-1 rounded">
              Accept
            </button>

            <button className="bg-red-500 text-white px-3 py-1 rounded">
              Decline
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}