
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isCaptchaPassed, setIsCaptchaPassed] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [mouseData, setMouseData] = useState([]);
  const [statusMessage, setStatusMessage] = useState("Our ML model is checking environmental parameters. Please move your mouse randomly to verify.");
  const [loading, setLoading] = useState(false);
  const [isBotDetected, setIsBotDetected] = useState(false);
  const navigate = useNavigate();

  // Capture mouse movements
  useEffect(() => {
    if (!showCaptcha) return;

    const captureMouseMovement = (event) => {
      const currentTime = Date.now();
      const timeDiff = mouseData.length ? currentTime - mouseData[mouseData.length - 1].timestamp : 0;

      setMouseData((prevData) => [
        ...prevData,
        { x: event.clientX, y: event.clientY, timestamp: currentTime, timeDiff }
      ]);
    };

    window.addEventListener("mousemove", captureMouseMovement);

    return () => {
      window.removeEventListener("mousemove", captureMouseMovement);
    };
  }, [showCaptcha, mouseData]);

  // Analyze movements to detect human behavior
  const isHumanMovement = (data) => {
    let humanDetected = false;

    if (data.length < 10) return false;

    for (let i = 1; i < data.length; i++) {
      const dx = Math.abs(data[i].x - data[i - 1].x);
      const dy = Math.abs(data[i].y - data[i - 1].y);
      const distance = Math.sqrt(dx * dx + dy * dy);
      const time = data[i].timeDiff;

      // Check if movement is random enough to indicate human-like behavior
      if (distance > 5 && time > 20 && (dx > 3 || dy > 3)) {
        humanDetected = true;
      }
    }
    return humanDetected;
  };

  // Verify human periodically
  useEffect(() => {
    const verifyHuman = async () => {
      if (mouseData.length >= 10) {
        setLoading(true);
        try {
          const humanDetected = isHumanMovement(mouseData);

          if (humanDetected) {
            setIsCaptchaPassed(true);
            setShowCaptcha(false);
            setIsBotDetected(false);
          alert("Verification successful. now click on login .");
          } else {
            setIsBotDetected(true);
            setIsCaptchaPassed(false);
            setStatusMessage("Bot detected. Please move the mouse randomly.");
          }
        } catch (error) {
          console.error("Error verifying human:", error);
          setStatusMessage("Error verifying. Please try again.");
        } finally {
          setLoading(false);
        }
      }
    };

    if (showCaptcha) {
      const interval = setInterval(verifyHuman, 2000);
      return () => clearInterval(interval);
    }
  }, [mouseData, showCaptcha]);

  // Show CAPTCHA box on button click
  const handleCaptchaClick = () => {
    setShowCaptcha(true);
    setMouseData([]);
    setIsCaptchaPassed(false);
    setIsBotDetected(false);
    setStatusMessage("Our ML model is checking environmental parameters. Please move your mouse randomly to verify.");
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCaptchaPassed && !isBotDetected) {
      navigate("/home"); // Redirect only if human verification is successful
    } else {
      alert("Verification failed. You cannot log in.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex items-center justify-center">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h2 className="text-3xl font-semibold text-blue-600 text-center mb-6">Login to UIDAI</h2>

        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          {/* Verify CAPTCHA Button */}
          <button
            className="w-full mb-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all"
            onClick={handleCaptchaClick}
            type="button"
          >
            Verify CAPTCHA
          </button>

          {/* CAPTCHA Box */}
          {showCaptcha && (
            <div className="mb-6 p-6 border-4 border-dashed border-indigo-500 rounded-lg">
              <p className="text-gray-700 text-center mb-6">{statusMessage}</p>
              {loading ? (
                <div className="flex justify-center items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
              ) : (
                <div className="text-center mt-4">
                  <span className="px-4 py-2 bg-green-200 text-green-800 font-semibold rounded-full">
                    Verification
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;