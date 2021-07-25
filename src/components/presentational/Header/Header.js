import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  const aboutUsTitle = (
    <>
      <FontAwesomeIcon icon="info-circle" /> Acerca de
    </>
  );

  const initiativesTitle = (
    <>
      <FontAwesomeIcon icon="mountain" /> Iniciativas
    </>
  );

  return (
    <Navbar variant="dark" expand="lg" sticky="top" className={styles.Navbar}>
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>
            <img
              src="/logo-santuarios-navbar.png"
              height="30"
              className="d-inline-block align-top"
              alt="Logo: Santuarios de Altura"
            />{' '}
            <span className={styles.Header__NavbarBrandTitle}>
              Santuarios de Altura
            </span>
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto flex-fill justify-content-around text-uppercase">
            <NavDropdown title={aboutUsTitle} id="basic-nav-dropdown">
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

            <NavDropdown title={initiativesTitle} id="basic-nav-dropdown">
              <NavDropdown.Header>CAPS</NavDropdown.Header>
              <Link href="/iniciativas/caps/que-es" passHref>
                <NavDropdown.Item>¿Qué es CAPS?</NavDropdown.Item>
              </Link>
              <Link href="/iniciativas/caps/preguntas-frecuentes" passHref>
                <NavDropdown.Item>Preguntas Frecuentes</NavDropdown.Item>
              </Link>
              <NavDropdown.Item href="https://caps.santuariosdealtura.cl/views/account/myaccount">
                Portal CAPS
              </NavDropdown.Item>

              <NavDropdown.Divider></NavDropdown.Divider>

              <NavDropdown.Header>Apus Tutelares</NavDropdown.Header>
              <Link href="/iniciativas/apus/que-es" passHref>
                <NavDropdown.Item>¿Qué es Apus Tutelares?</NavDropdown.Item>
              </Link>

              {/* <Link href="/iniciativa/mac" passHref>
              <NavDropdown.Item>MAC</NavDropdown.Item>
            </Link> */}
            </NavDropdown>

            <Link href="/contacto" passHref>
              <Nav.Link>
                <FontAwesomeIcon icon="comment" /> Contacto
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
