import React, { useState } from "react";
import TurfCards from "./TurfsCards";

function MainContent() {

  const [turfs, setTurfs] = useState([]);

  const cityIdMap = {
    THANE: 1,
    ANDHERI: 2,
    CHEMBUR: 3,
    VASHI: 4,
    DOMBIVALI: 5,
  };

  const handleCityClick = (city) => {

    const id = cityIdMap[city];

    fetch(`http://localhost:8080/api/turf/city/${id}`)
      .then(res => res.json())
      .then(data => {
        setTurfs(data);   // ⭐ update state
      })
      .catch(err => console.error(err));
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

      <TurfCards turfs={turfs} />

    </div>
  );
}

export default MainContent;