import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { UserRound, Phone, MapPin, Mail, Lock, UserPlus } from "lucide-react";

const SignUpPage = () => {
  const { signUpWithEmailAndProfile } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUpWithEmailAndProfile(formData);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <UserPlus className="w-8 h-8 text-green-600" />
          <h2 className="text-2xl font-bold ml-2">Create Account</h2>
        </div>

        <form onSubmit={handleSignUp} className="space-y-4">
          <div className="flex items-center border rounded-lg px-3 py-2">
            <UserRound className="w-5 h-5 text-gray-500 mr-2" />
            <input
              name="name"
              placeholder="Full Name"
              className="w-full outline-none"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center border rounded-lg px-3 py-2">
            <Phone className="w-5 h-5 text-gray-500 mr-2" />
            <input
              name="phone"
              placeholder="Phone Number"
              className="w-full outline-none"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center border rounded-lg px-3 py-2">
            <MapPin className="w-5 h-5 text-gray-500 mr-2" />
            <input
              name="address"
              placeholder="Address"
              className="w-full outline-none"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center border rounded-lg px-3 py-2">
            <Mail className="w-5 h-5 text-gray-500 mr-2" />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full outline-none"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center border rounded-lg px-3 py-2">
            <Lock className="w-5 h-5 text-gray-500 mr-2" />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full outline-none"
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg flex justify-center items-center gap-2"
          >
            <UserPlus className="w-4 h-4" />
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
