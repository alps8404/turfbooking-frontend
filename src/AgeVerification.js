import React from "react";
import { useNavigate } from "react-router-dom";

const AgeVerification = ({ setIsVerified }) => {
  const navigate = useNavigate();

  const handleRedirect = (role) => {
  setIsVerified(true);
  localStorage.setItem("userRole", role); // Store the role
  navigate("/login");
};

  // const handleRedirect = (path) => {
  //   setIsVerified(true);    
  //   localStorage.setItem("userRole", role);  // ✅ set verified
  //   navigate(path, { replace: true }); // ✅ Replace history so `/main` isn’t flashed
  // };

  return (
    <div className="container">
      <div className="logo">
        <span className="logo-white">SPORTS </span>
        <span className="logo-orange">Hub</span>
      </div>

      <h1>This is a Sports website</h1>
      <p>This is a website for players and teams...</p>

      <div className="buttons">
        <button className="verifyButton" onClick={() => handleRedirect("team")}>I want a - Team</button>
        <button className="verifyButton" onClick={() => handleRedirect("player")}>I want a - Player</button>
        <button className="verifyButton3" onClick={() => handleRedirect("/turfs")}>Book My Turf</button>
      </div>

      <p>
        Our <a href="https://help.pornhub.com/hc/en-us/articles/4419885579795-Parental-Controls">parental controls page</a> explains how to block this site.
      </p>
    </div>
  );
};

export default AgeVerification;
