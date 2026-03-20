import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

function CustomNavbar() {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("player");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg" className="py-2">
      <Container fluid>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <span style={{ color: "white", fontWeight: "bold" }}>SPORTS</span>
          <span
            style={{
              backgroundColor: "orange",
              color: "black",
              padding: "2px 6px",
              borderRadius: "4px",
              marginLeft: "5px",
              fontWeight: "bold",
            }}
          >
            Hub
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>

            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>

            <NavDropdown title="Upcoming tournaments" id="tournaments-dropdown">
              <NavDropdown.Item>Local Matches</NavDropdown.Item>
              <NavDropdown.Item>Weekend League</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Book Turf" id="book-turf-dropdown">
              <NavDropdown.Item>5v5 Turfs</NavDropdown.Item>
              <NavDropdown.Item>7v7 Turfs</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Available Turfs" id="available-turfs-dropdown">
              <NavDropdown.Item>Nearby</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Teams/Players" id="teams-dropdown">
              <NavDropdown.Item>Find Players</NavDropdown.Item>
              <NavDropdown.Item>Find Teams</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link>Join Match</Nav.Link>

            <NavDropdown title="Events/Tournaments">
              <NavDropdown.Item>Upcoming Events</NavDropdown.Item>
            </NavDropdown>

          </Nav>

          {/* RIGHT SIDE */}
          <div className="d-flex align-items-center">

            {!user ? (

              <Button
                variant="warning"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>

            ) : (

              <NavDropdown
                title={
                  <span className="text-white">
                    <i className="bi bi-person-circle me-2"></i>
                    {user.name}
                  </span>
                }
                id="profile-dropdown"
                align="end"
              >
                <NavDropdown.Item onClick={() => navigate("/profile")}>
                  Profile
                </NavDropdown.Item>

                <NavDropdown.Item onClick={() => navigate("/my-bookings")}>
                  My Bookings
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => {
                    localStorage.removeItem("player");
                    setUser(null);
                    navigate("/");
                  }}
                >
                  Logout
                </NavDropdown.Item>

              </NavDropdown>

            )}

          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;