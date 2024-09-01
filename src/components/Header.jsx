import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-primary">
        <Container>
        {/* <i class="fa-brands fa-bluesky"></i> */}
        {/* <i style={{color:"white"}} class="fa-solid fa-heart fa-bounce me-3"></i> */}
        <img src="https://jan-eldho.github.io/wings-decorations/images/wings-deco.jpg" height="40px" width="45px" alt="" className='me-3'></img>
          <Navbar.Brand>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Wings Diamonds</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link><Link to="/testimonials" style={{ color: 'white', textDecoration: 'none' }}>Testimonials</Link></Nav.Link>
              <Nav.Link><Link to="/gallery" style={{ color: 'white', textDecoration: 'none' }}>Gallery</Link></Nav.Link>
              <Nav.Link><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
