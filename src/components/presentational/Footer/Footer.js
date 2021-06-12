import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={`row ${styles.Footer}`}>
      <div className="col-md-6">
        <h3>Contacto</h3>
        <dl>
          <dt>Santuarios de Altura:</dt>
          <dd>
            <a href="mailto:santuariosdealtura@gmail.com">
              <FontAwesomeIcon icon="envelope" /> santuariosdealtura@gmail.com
            </a>
          </dd>

          <dt>CAPS:</dt>
          <dd>
            <a href="mailto:limpiezadelplomo@gmail.com">
              <FontAwesomeIcon icon="envelope" /> limpiezadelplomo@gmail.com
            </a>
          </dd>

          <dt>Apus Tutelares:</dt>
          <dd>
            <a href="mailto:apustutelares@gmail.com">
              <FontAwesomeIcon icon="envelope" /> apustutelares@gmail.com
            </a>
          </dd>

          <dt>MAC:</dt>
          <dd>
            <a href="mailto:montanismoaloscolegios@gmail.com">
              <FontAwesomeIcon icon="envelope" />{' '}
              montanismoaloscolegios@gmail.com
            </a>
          </dd>
        </dl>
      </div>

      <div className="col-md-6">
        <h3>Redes Sociales</h3>
        <ul className="list-unstyled">
          <li>
            <a
              href="https://www.instagram.com/caps_limpieza_de_el_plomo/"
              target="_blank"
            >
              <FontAwesomeIcon icon={['fab', 'instagram']} /> Instagram
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/Santuarios-de-Altura-344307135954852/"
              target="_blank"
            >
              <FontAwesomeIcon icon={['fab', 'facebook']} /> Facebook
            </a>
          </li>

          <li>
            <a
              href="https://www.youtube.com/user/santuariosdealtura/"
              target="_blank"
            >
              <FontAwesomeIcon icon={['fab', 'youtube']} /> Youtube
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
