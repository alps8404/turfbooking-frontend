import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Row, Col, Container } from "react-bootstrap";

function TurfCards() {
  const navigate = useNavigate();
  const [turfs, setTurfs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/turf/api/turfs")
      .then((res) => res.json())
      .then((data) => {
        console.log("API RESPONSE:", data);
        setTurfs(data);
      })
      .catch((err) => console.error("Error fetching turfs:", err));
  }, []);

  return (
    <Container className="mt-5 pt-3">
      <Row className="g-4">
        {turfs.map((turf) => (
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
                  <strong>Price:</strong> {turf.price} <br />
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