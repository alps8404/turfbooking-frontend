import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Card, Button, Form, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function TurfDetails() {

    const navigate = useNavigate();
    const location = useLocation();
    const turf = location.state;

    const [date, setDate] = useState("");
    const [selectedSlot, setSelectedSlot] = useState("");

    const slots = [
        "06:00 AM",
        "07:00 AM",
        "08:00 AM",
        "09:00 AM",
        "10:00 AM",
        "11:00 AM",
        "05:00 PM",
        "06:00 PM",
        "07:00 PM"
    ];

    const handleBooking = () => {

        if (!date || !selectedSlot) {
            alert("Please select date and slot");
            return;
        }

        alert("Booking successful!");
        navigate("/main");
    };

    return (
        <Container className="mt-5 pt-5">

            <Card className="bg-dark text-white shadow">

                <Card.Img
                    variant="top"
                    src={turf.image}
                    style={{ height: "300px", objectFit: "cover" }}
                />

                <Card.Body>

                    <Card.Title>{turf.name}</Card.Title>

                    <Card.Text>

                        <strong>Location:</strong> {turf.location} <br />
                        <strong>Price:</strong> {turf.price} <br />
                        <strong>Type:</strong> {turf.type}

                    </Card.Text>

                    <hr />

                    <h5>Select Date</h5>

                    <Form.Control
                        type="date"
                        className="mb-4"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />

                    <h5>Available Slots</h5>

                    <Row className="g-2 mb-4">

                        {slots.map((slot, index) => (

                            <Col key={index} xs={4} md={3}>

                                <Button
                                    className="w-100"
                                    style={{
                                        backgroundColor: selectedSlot === slot ? "#ffc107" : "transparent",
                                        color: selectedSlot === slot ? "black" : "white",
                                        border: "1px solid #ffc107"
                                    }}
                                    onClick={() => setSelectedSlot(slot)}
                                >
                                    {slot}
                                </Button>

                            </Col>

                        ))}

                    </Row>

                    <Button variant="warning" onClick={handleBooking}>
                        Book Now
                    </Button>

                </Card.Body>

            </Card>

        </Container>
    );
}

export default TurfDetails;