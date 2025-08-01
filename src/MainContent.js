import React from "react";
import TurfCards from "./TurfsCards";

function MainContent() {
  // ✅ Hardcoded city-to-ID map (can come from DB later)
  const cityIdMap = {
    "THANE": 1,
    "ANDHERI": 2,
    "CHEMBUR": 3,
    "VASHI": 4,
    "DOMBIVALI": 5,
  };

  const handleCityClick = (city) => {
    const id = cityIdMap[city];
    if (!id) {
      console.error("City ID not mapped for:", city);
      return;
    }

    fetch(`http://localhost:8080/api/turf/city/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Turfs for", city, ":", data); // ← You can display this on UI
      })
      .catch((err) => console.error("Error fetching turf:", err));
  };

  return (
    <div className="main-content">
      
      <div className="container2">
        <div className="row no-gutters">
          {Object.keys(cityIdMap).map((city, index) => (
            <div
              key={index}
              className="col"
              onClick={() => handleCityClick(city)}
             
            >
              {city}
            </div>
          ))}
        </div>
      </div>
      <TurfCards/>
    </div>
  );
}

export default MainContent;
