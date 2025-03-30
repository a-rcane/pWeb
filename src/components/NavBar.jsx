import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles/NavBarStyles.css';
import { useState } from 'react';

const NavBar = ({ setSelectedProject }) => {
    const [isPoweredOn, setIsPoweredOn] = useState(true);

    return (
        <Navbar expand="lg" className="navbar">
        <Container className="nav-container">
            <Navbar.Brand>Corpse</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#frontend" onClick={() => {
                    setSelectedProject(isPoweredOn ? "frontend" : "exit");
                    setIsPoweredOn(true);
                    }}>Frontend</Nav.Link>
                <Nav.Link href="#ui" onClick={() => {
                    setSelectedProject(isPoweredOn ? "ui" : "exit");
                    setIsPoweredOn(true);
                    }}>UI</Nav.Link>
                <Nav.Link href="#exit" onClick={(e) => {
                        e.preventDefault(); 
                        setIsPoweredOn(!isPoweredOn);
                        setSelectedProject(isPoweredOn ? "exit" : "home");
                    }}><i className="bi bi-power"></i></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavBar;