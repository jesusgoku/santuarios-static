import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

import styles from './Header.module.css';

function Header() {
  return (
    <Navbar expand="md" sticky="top" className={styles.Navbar}>
      <Container>
        {/* <Link href="/" passHref>
        <Navbar.Brand>Santuarios de Altura</Navbar.Brand>
      </Link> */}

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto flex-fill justify-content-around text-uppercase">
            <Link href="/" passHref>
              <Nav.Link>Inicio</Nav.Link>
            </Link>

            {/* <Link href="/mision-vision" passHref>
            <Nav.Link>Acerca De</Nav.Link>
          </Link> */}

            <NavDropdown title="Acerca De" id="basic-nav-dropdown">
              <Link href="/acerca-de/santuarios-altura" passHref>
                <NavDropdown.Item>Santuarios de Altura</NavDropdown.Item>
              </Link>

              <Link href="/acerca-de/mision-vision" passHref>
                <NavDropdown.Item>Misión y Visión</NavDropdown.Item>
              </Link>

              <Link href="/acerca-de/principios" passHref>
                <NavDropdown.Item>Principios</NavDropdown.Item>
              </Link>

              <Link href="/acerca-de/forma-trabajo" passHref>
                <NavDropdown.Item>Forma de Trabajo</NavDropdown.Item>
              </Link>
            </NavDropdown>

            <NavDropdown title="Iniciativas" id="basic-nav-dropdown">
              <Link href="/iniciativas/caps" passHref>
                <NavDropdown.Item>CAPS</NavDropdown.Item>
              </Link>

              <Link href="/iniciativas/apus" passHref>
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
      </Container>
    </Navbar>
  );
}

export default Header;
