import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Row, Col, Container } from "react-bootstrap";

function TurfCards({ selectedCity }) {
  const navigate = useNavigate();

  const [allTurfs, setAllTurfs] = useState([]);
  const [filteredTurfs, setFilteredTurfs] = useState([]);

  const API_BASE_URL = process.env.REACT_APP_TURF_DETAILS;

  useEffect(() => {
    fetch(`${API_BASE_URL}/turf/api/turfs`)
      .then((res) => res.json())
      .then((data) => {
        setAllTurfs(data);
        setFilteredTurfs(data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (selectedCity === "ALL") {
      setFilteredTurfs(allTurfs);
    } else {
      const result = allTurfs.filter(
        (turf) =>
          turf.location.toUpperCase() === selectedCity.toUpperCase()
      );

      setFilteredTurfs(result);
    }
  }, [selectedCity, allTurfs]);

  return (
    <Container className="mt-5 pt-3">
      <Row className="g-4">

        {filteredTurfs.map((turf) => (
          <Col key={turf.id} sm={12} md={6} lg={4}>
            <Card
              className="bg-dark text-white h-100 shadow-sm turf-card"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/turf/${turf.id}`, { state: turf })}
            >
              <Card.Img
                variant="top"
                src={turf.image}
                style={{ height: "200px", objectFit: "cover" }}
              />

              <Card.Body>
                <Card.Title>{turf.name}</Card.Title>

                <Card.Text>
                  <strong>Location:</strong> {turf.location} <br />
                  <strong>Price:</strong> ₹{turf.price} <br />
                  <strong>Type:</strong> {turf.type}
                </Card.Text>
              </Card.Body>

            </Card>
          </Col>
        ))}

      </Row>
    </Container>
  );
}

export default TurfCards;