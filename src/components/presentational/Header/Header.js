import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import styles from './Header.module.css';

function Header() {
  return (
    <Navbar expand="lg">
      {/* <Link href="/" passHref>
        <Navbar.Brand>Santuarios de Altura</Navbar.Brand>
      </Link> */}

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto flex-fill justify-content-around text-uppercase">
          <Link href="/" passHref>
            <Nav.Link>Inicio</Nav.Link>
          </Link>

          <Link href="/mision-vision" passHref>
            <Nav.Link>Acerca De</Nav.Link>
          </Link>

          <NavDropdown title="Iniciativas" id="basic-nav-dropdown">
            <Link href="/iniciativa/caps" passHref>
              <NavDropdown.Item>CAPS</NavDropdown.Item>
            </Link>

            <Link href="/iniciativa/apus" passHref>
              <NavDropdown.Item>Apus Tutelares</NavDropdown.Item>
            </Link>

            {/* <Link href="/iniciativa/mac" passHref>
              <NavDropdown.Item>MAC</NavDropdown.Item>
            </Link> */}
          </NavDropdown>

          <Link href="/contacto" passHref>
            <Nav.Link>Contacto</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
