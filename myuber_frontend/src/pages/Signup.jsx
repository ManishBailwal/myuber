import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Signup() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "RIDER",
   
   
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Later:
    // POST /auth/signup
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="card w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <Input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <Input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            maxLength={10}
            required
            
          />

          {/* Role Selection */}
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="input"
          >
            <option value="RIDER">Rider</option>
            <option value="DRIVER">Driver</option>
          </select>

          <Button type="submit">
            Signup
          </Button>

        </form>

      </div>

    </div>
  );
}