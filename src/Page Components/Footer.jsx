import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';

function Footer() {
  return (
    <Navbar bg="dark" variant="dark" className="mt-5 pt-4 pb-4">
      <Container>
        <Row className="w-100">
          {/* Left Section */}
          <Col md={6}>
            <p className="text-center text-md-left text-light">
              &copy; 2024 MyApp. All Rights Reserved.
            </p>
          </Col>
          
          {/* Right Section */}
          <Col md={6} className="text-center text-md-right">
            <p className="text-light mb-1">
              Follow Us:
            </p>
            <a href="https://facebook.com" className="text-light mr-3">Facebook</a> <br/>
            <a href="https://twitter.com" className="text-light mr-3">Twitter</a> <br/>
            <a href="https://linkedin.com" className="text-light">LinkedIn</a>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Footer;
