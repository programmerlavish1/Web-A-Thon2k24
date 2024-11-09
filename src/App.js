import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from './components/HomePage';
import MouseTracking from "./components/MouseTracking";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for LoginPage */}
        <Route path="/" element={<LoginPage />} />

        {/* Route for HomePage (after successful login and verification) */}
        <Route path="/home" element={<HomePage/>} />
      </Routes>
    </Router>
  );
};

export default App;