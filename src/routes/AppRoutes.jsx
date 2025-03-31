import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar will appear on all pages */}
      <Routes>
        <Route path="/Home" element={<Home />} />
        {/* Add more routes here if needed */}

      </Routes>
    </Router>
  );
};

export default AppRoutes;
