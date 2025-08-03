import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPlayerForm = () => {
  const navigate = useNavigate();

  const [player, setPlayer] = useState({
    name: "",
    age: "",
    mobile: "",
    position: "",
    location: "",
    professionalism: "",
    groupName: "",
  });

  const handleChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://player-service-n0y0.onrender.com/api/players/save", player);
      alert("Player registered successfully!");
      navigate("/main");
    } catch (err) {
      alert("Error registering player");
      console.error(err);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register a Player</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            value={player.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Age */}
        <div className="mb-3">
          <input
            type="number"
            name="age"
            className="form-control"
            placeholder="Age"
            value={player.age}
            onChange={handleChange}
            required
          />
        </div>

        {/* Mobile */}
        <div className="mb-3">
          <input
            type="text"
            name="mobile"
            className="form-control"
            placeholder="Mobile"
            value={player.mobile}
            onChange={handleChange}
            required
          />
        </div>

        {/* Position (Dropdown) */}
        <div className="mb-3">
          <select
            name="position"
            className="form-control"
            value={player.position}
            onChange={handleChange}
            required
          >
            <option value="">Select Position</option>
            <option value="Striker">Striker</option>
            <option value="Midfielder">Midfielder</option>
            <option value="Defender">Defender</option>
            <option value="Goalkeeper">Goalkeeper</option>
          </select>
        </div>

        {/* Professionalism (Dropdown) */}
        <div className="mb-3">
          <select
            name="professionalism"
            className="form-control"
            value={player.professionalism}
            onChange={handleChange}
            required
          >
            <option value="">Select Professionalism</option>
            <option value="Local">Local</option>
            <option value="Professional">Professional</option>
            <option value="Highly Classified">Highly Classified</option>
          </select>
        </div>

        {/* Location (Hardcoded for now) */}
        <div className="mb-3">
          <select
            name="location"
            className="form-control"
            value={player.location}
            onChange={handleChange}
            required
          >
            <option value="">Select Location</option>
            <option value="Andheri">Andheri</option>
            <option value="Bandra">Bandra</option>
            <option value="Thane">Thane</option>
            <option value="Vashi">Vashi</option>
          </select>
        </div>

        {/* Group Name */}
        <div className="mb-3">
          <input
            type="text"
            name="groupName"
            className="form-control"
            placeholder="Group Name (Optional)"
            value={player.groupName}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPlayerForm;
