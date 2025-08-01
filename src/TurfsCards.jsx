import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

const dummyTurfs = [
  {
    id: 1,
    name: "Skyline Turf",
    location: "Thane",
    price: "₹800/hour",
    type: "5v5",
    image: "https://plus.unsplash.com/premium_photo-1725408037993-f891474828c9?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // use CDN or placeholder image
  },
  {
    id: 2,
    name: "Astro Arena",
    location: "Andheri",
    price: "₹1200/hour",
    type: "6v6",
    image: "https://plus.unsplash.com/premium_photo-1725408037993-f891474828c9?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Playzone Chembur",
    location: "Chembur",
    price: "₹950/hour",
    type: "5v5",
    image: "https://plus.unsplash.com/premium_photo-1725408037993-f891474828c9?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Playzone Bandra",
    location: "Bandra",
    price: "₹950/hour",
    type: "5v5",
    image: "https://plus.unsplash.com/premium_photo-1725408037993-f891474828c9?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Playzone Pune",
    location: "Pune",
    price: "₹950/hour",
    type: "5v5",
    image: "https://plus.unsplash.com/premium_photo-1725408037993-f891474828c9?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function TurfCards() {
  return (
    <Container className="mt-5 pt-3">
      <Row className="g-4">
        {dummyTurfs.map((turf) => (
          <Col key={turf.id} sm={12} md={6} lg={4}>
            <Card className="bg-dark text-white h-100 shadow-sm turf-card">
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
