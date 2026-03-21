import React, { useEffect, useState } from "react";
import { Container, Card, Button, Row, Col, Badge } from "react-bootstrap";

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const player = JSON.parse(localStorage.getItem("player"));
                const userId = player?.id;

                if (!userId) {
                    console.error("No user found in localStorage");
                    return;
                }

                const response = await fetch(`${API_BASE_URL}/api/bookings/user/${userId}`);
                const data = await response.json();

                console.log("Bookings API response:", data);
                setBookings(data);
            } catch (error) {
                console.error("Error fetching bookings:", error);
            }
        };

        fetchBookings();
    }, [API_BASE_URL]);

    const handleCancel = (id) => {
        alert(`Cancel booking ID: ${id}`);
    };

    return (
        <Container className="mt-4">
            <h2 className="mb-4 text-white">📅 My Bookings</h2>

            {bookings.length === 0 ? (
                <p className="text-white">No bookings found.</p>
            ) : (
                <Row>
                    {bookings.map((booking) => (
                        <Col md={6} key={booking.id} className="mb-4">
                            <Card className="shadow-lg border-0 rounded-4 p-3" style={{ background: "#1e1e1e", color: "white" }}>
                                <Card.Body>

                                    <Card.Title className="fw-bold fs-4 mb-3 text-center">
                                        {booking.turfName}
                                    </Card.Title>

                                    <div className="mb-2">📍 {booking.location}</div>
                                    <div className="mb-2">🕒 {booking.slotTime}</div>
                                    <div className="mb-2">📆 {booking.bookingDate}</div>
                                    <div className="mb-3">👤 {booking.playerName}</div>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <Badge
                                            bg={booking.status === "BOOKED" ? "success" : "secondary"}
                                            className="px-3 py-2"
                                        >
                                            {booking.status}
                                        </Badge>

                                        <Button
                                            variant="outline-danger"
                                            size="sm"
                                            onClick={() => handleCancel(booking.id)}
                                        >
                                            Cancel
                                        </Button>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default MyBookings;