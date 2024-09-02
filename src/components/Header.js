import { Nav, Navbar, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const location = useLocation();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Nav className="me-auto">
          <Nav.Link
            as={Link}
            to="/home"
            className="theLink"
            active={location.pathname === "/home"}
          >
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/registration" className="theLink">
            Registration
          </Nav.Link>
          <Nav.Link as={Link} to="/logIn" className="theLink">
            Log in
          </Nav.Link>
          <Nav.Link as={Link} to="/ourInstructors" className="theLink">
            Our Instructors
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
