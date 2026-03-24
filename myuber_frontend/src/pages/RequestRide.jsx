import React, { useState, useRef } from "react";
import { LoadScript, Autocomplete } from "@react-google-maps/api";

const libraries = ["places"];

export default function RequestRide() {
  const [pickupInput, setPickupInput] = useState("");
  const [dropInput, setDropInput] = useState("");

  const [pickup, setPickup] = useState(null);
  const [drop, setDrop] = useState(null);

  const pickupRef = useRef(null);
  const dropRef = useRef(null);

  // ✅ Pickup handler (FIXED)
  const handlePickupChanged = () => {
    const place = pickupRef.current.getPlace();

    if (!place || !place.geometry) {
      console.log("❌ Invalid pickup");
      return;
    }

    const address = place.formatted_address;

    const data = {
      address,
      coordinates: [
        place.geometry.location.lng(),
        place.geometry.location.lat(),
      ],
    };

    setPickup(data);
    setPickupInput(address); // 🔥 IMPORTANT FIX

    console.log("📍 Pickup:", data);
  };

  // ✅ Drop handler (FIXED)
  const handleDropChanged = () => {
    const place = dropRef.current.getPlace();

    if (!place || !place.geometry) {
      console.log("❌ Invalid drop");
      return;
    }

    const address = place.formatted_address;

    const data = {
      address,
      coordinates: [
        place.geometry.location.lng(),
        place.geometry.location.lat(),
      ],
    };

    setDrop(data);
    setDropInput(address); // 🔥 IMPORTANT FIX

    console.log("🏁 Drop:", data);
  };

  // ✅ Search Ride
  const handleSearchRide = () => {
    if (!pickup || !drop) {
      alert("Please select both pickup and drop locations");
      return;
    }

    console.log("🚀 Searching ride with:");
    console.log({ pickup, drop });

    // 👉 Next step: API call
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      libraries={libraries}
    >
      <div className="min-h-screen flex items-center justify-center bg-gray-100">

        <div className="bg-white p-6 rounded-xl shadow w-full max-w-md">

          <h2 className="text-xl font-semibold mb-4">
            Request a Ride 🚗
          </h2>

          {/* Pickup */}
          <Autocomplete
            onLoad={(ref) => (pickupRef.current = ref)}
            onPlaceChanged={handlePickupChanged}
          >
            <input
              type="text"
              placeholder="Enter pickup location"
              value={pickupInput}
              onChange={(e) => setPickupInput(e.target.value)}
              className="w-full border p-2 rounded mb-3"
            />
          </Autocomplete>

          {/* Drop */}
          <Autocomplete
            onLoad={(ref) => (dropRef.current = ref)}
            onPlaceChanged={handleDropChanged}
          >
            <input
              type="text"
              placeholder="Enter drop location"
              value={dropInput}
              onChange={(e) => setDropInput(e.target.value)}
              className="w-full border p-2 rounded mb-4"
            />
          </Autocomplete>

          {/* Button */}
          <button
            onClick={handleSearchRide}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Search Ride 🔍
          </button>

        </div>
      </div>
    </LoadScript>
  );
}