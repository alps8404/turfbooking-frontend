import React from "react";

const AgeVerification = ({ onVerify }) => {
  const handleExit = () => {
    alert("You must be at least 18 years old to enter this site.");
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="container">
        <div className="logo">
  <span className="logo-white">SPORTS </span><span className="logo-orange">Hub</span>
</div>
      <h1>This is an Sports website</h1>
      <p>
        This is a website for a team or player to register them selves. A player can find a team and a team can find players
        to play along.
        </p>
      <div className="buttons">
        <button  className="verifyButton" onClick={onVerify}>I want a - Team </button>
        <button  className="verifyButton" onClick={onVerify}>I  want a - Player</button>
        <button  className="verifyButton3" onClick={onVerify}>Book My Turf</button>
      </div>
      <p>
        Our <a href="https://help.pornhub.com/hc/en-us/articles/4419885579795-Parental-Controls"  >parental controls page</a> explains how you can easily
        block access to this site.</p>
    </div>
  );
};

export default AgeVerification;
