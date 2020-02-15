import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <Navbar className="border-bottom" bg="transparent" expand="lg">
      <Navbar.Brand>Simon Lobo</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-toogle" className="border-0" />
      <Navbar.Collapse id="navbar-toggle">
        <Nav className="ml-auto">
          <Link to="/simon" className="nav-link">
            Home
          </Link>
          <Link to="/simon/about" className="nav-link">
            About
          </Link>
          <Link to="/simon/contact" className="nav-link">
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
