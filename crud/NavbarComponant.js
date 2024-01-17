
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarComponant() {
    return (

        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">Perpustakaan Kota </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/books">Data Buku</Nav.Link>
                    <Nav.Link as={Link} to="/peminjams">DataPeminjam</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default NavbarComponant;