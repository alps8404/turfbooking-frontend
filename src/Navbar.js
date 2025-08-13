
  import {
    Navbar,
    Nav,
    NavDropdown,
    Container,
    Button,
  } from "react-bootstrap";
  import { useNavigate } from "react-router-dom";


  function CustomNavbar() {

    const navigate = useNavigate();
  
  
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
              <Nav.Link onClick={() => navigate("/")} >Home</Nav.Link>
              <NavDropdown title="Upcoming tournaments" id="porn-videos-dropdown">
                <NavDropdown.Item href="#">Trending</NavDropdown.Item>
                <NavDropdown.Item href="#">New</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Book Turf" id="categories-dropdown">
                <NavDropdown.Item href="#">Amateur</NavDropdown.Item>
                <NavDropdown.Item href="#">MILF</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Available turfs" id="cams-dropdown">
                <NavDropdown.Item href="#">Popular</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Teams/Players" id="stars-dropdown">
                <NavDropdown.Item href="#">Top Rated</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Join Match</Nav.Link>
              <NavDropdown title="Events/Tournaments" id="community-dropdown">
                <NavDropdown.Item href="#">Forum</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Other Sorts" id="media-dropdown">
                <NavDropdown.Item href="#">Cricket</NavDropdown.Item>
                <NavDropdown.Item href="#">Basketball</NavDropdown.Item>
                <NavDropdown.Item href="#">Volleyball</NavDropdown.Item>
                <NavDropdown.Item href="#">Tennis</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <div className="d-flex align-items-center mt-3 mt-lg-0 flex-column flex-lg-row w-100 w-lg-auto">
            

              <Button variant="warning" className="ms-3" onClick={() => navigate("/login")}>Login</Button>


              <Nav.Link href="#" className="text-white">
                <i className="bi bi-person-circle" style={{ fontSize: "1.5rem" }}></i>
              </Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  export default CustomNavbar;
