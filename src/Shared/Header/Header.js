import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {

    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">SARKER</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/contactme">Contact Me</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Projects</Nav.Link>
                        {/* <Nav.Link as={HashLink} to="/resume">Resume</Nav.Link> */}



                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;