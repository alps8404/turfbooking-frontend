import React, { useState } from "react";
import TurfCards from "./TurfsCards";

function MainContent() {

  const [selectedCity, setSelectedCity] = useState("ALL");

  const cities = [
    "ALL",
    "THANE",
    "ANDHERI",
    "CHEMBUR",
    "VASHI",
    "DOMBIVALI"
  ];

  return (
    <div className="main-content">

      {/* Top City Menu */}
      <div className="container2">
        <div className="row no-gutters">

          {cities.map((city, index) => (
            <div
              key={index}
              className="col"
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedCity(city)}
            >
              {city}
            </div>
          ))}

        </div>
      </div>

      {/* Turf Cards */}
      <TurfCards selectedCity={selectedCity} />

    </div>
  );
}

export default MainContent;