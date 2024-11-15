import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../Assets/Images/Vivek-logo.png';

function MyNavbar({ onLoginClick, onRegisterClick }) {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        alt="Logo"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />{' '}
                    MyApp
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link href="#Login">
                            <Button variant="outline-light" onClick={onLoginClick}>Login</Button>
                        </Nav.Link>
                        <Nav.Link href="#Resister">
                            <Button variant="outline-light" onClick={onRegisterClick}>Resister</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar; 
