import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [adharPhotoUrl, setAdharPhotoUrl] = useState(""); // For URL input

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create user data object
    const userData = {
      username,
      password,
      adharPhotoUrl, // Save the URL of the Aadhaar photo
    };

    // Simulate a database by saving the user data to localStorage
    localStorage.setItem("userData", JSON.stringify(userData));

    // Navigate to HomePage and pass the user data
    navigate("/home", { state: { userData } });
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
        <h1 className="text-3xl font-semibold text-blue-800 mb-6 text-center">
          UIDAI Registration Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-3 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Aadhaar Photo URL</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg"
              placeholder="Enter Aadhaar photo URL"
              value={adharPhotoUrl}
              onChange={(e) => setAdharPhotoUrl(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg mt-4"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
