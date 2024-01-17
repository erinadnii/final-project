

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarComponentb() {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">Data para Peminjam</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/crud">Data Buku</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default NavbarComponentb;