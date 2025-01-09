import React from 'react';
import { Container, Button, Navbar, Nav } from 'react-bootstrap';

const HomePage = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">PWA Demo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="py-5">
        <div style={{ padding: '2rem', backgroundColor: '#e9ecef', borderRadius: '0.3rem' }}>
          <h1>Welcome to My PWA Demo</h1>
          <p>This is a Progressive Web App built with React and Bootstrap.</p>
          <Button variant="primary">Learn more</Button>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
