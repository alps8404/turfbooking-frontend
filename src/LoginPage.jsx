import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";

function LoginPage() {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const correctOtp = "123456";

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (phone.length !== 10) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }
    setError("");
    setOtpSent(true);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (enteredOtp === correctOtp) {
      setError("");
      navigate("/main");
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="p-4 bg-dark text-white rounded shadow" style={{ width: "100%", maxWidth: "400px" }}>
        <h3 className="text-center mb-4">Login with OTP</h3>
        <Form onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}>
          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter 10-digit phone number"
              disabled={otpSent}
              required
            />
          </Form.Group>

          {otpSent && (
            <Form.Group className="mb-3">
              <Form.Label>Enter OTP</Form.Label>
              <Form.Control
                type="text"
                value={enteredOtp}
                onChange={(e) => setEnteredOtp(e.target.value)}
                placeholder="Enter OTP"
                required
              />
            </Form.Group>
          )}

          {error && <Alert variant="danger">{error}</Alert>}

          <Button variant="warning" type="submit" className="w-100">
            {otpSent ? "Verify OTP" : "Send OTP"}
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default LoginPage;
