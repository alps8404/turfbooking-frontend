import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AgeVerification from "./AgeVerification";
import MainContent from "./MainContent";
import CustomNavbar from "./Navbar";
import LoginPage from "./LoginPage";
import TurfCards from "./TurfsCards"; // 👈 NEW IMPORT
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';

function App() {
  const [isVerified, setIsVerified] = useState(false);
  const [searchQuery, setSearchQuery] = useState("Indian");

  return (
    <Router>
      <Routes>

        <Route
          path="/"
          element={
            isVerified ? (
              <Navigate to="/main" />
            ) : (
              <AgeVerification onVerify={() => setIsVerified(true)} />
            )
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/main"
          element={
            isVerified ? (
              <>
                <CustomNavbar onSearchChange={setSearchQuery} />
                <MainContent searchQuery={searchQuery} />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* ✅ New Turf Cards Route */}
        <Route
          path="/turfs"
          element={
            isVerified ? (
              <>
                <CustomNavbar onSearchChange={setSearchQuery} />
                <TurfCards />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
