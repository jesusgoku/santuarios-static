import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BarRainbow from '@app/components/presentational/BarRainbow';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={`row ${styles.Footer}`}>
      <div className="col-md-6">
        <h3 className={styles.Footer__Title}>Contacto</h3>
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
        <h3 className={styles.Footer__Title}>Redes Sociales</h3>
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a
              href="https://www.instagram.com/caps_limpieza_de_el_plomo/"
              target="_blank"
              title="Instagram"
            >
              <FontAwesomeIcon icon={['fab', 'instagram']} size="3x" />{' '}
              <span className="sr-only">Instagram</span>
            </a>
          </li>

          <li className="list-inline-item">
            <a
              href="https://www.facebook.com/Santuarios-de-Altura-344307135954852/"
              target="_blank"
              title="Facebook"
            >
              <FontAwesomeIcon icon={['fab', 'facebook']} size="3x" />{' '}
              <span className="sr-only">Facebook</span>
            </a>
          </li>

          <li className="list-inline-item">
            <a
              href="https://www.youtube.com/user/santuariosdealtura/"
              target="_blank"
              title="Youtube"
            >
              <FontAwesomeIcon icon={['fab', 'youtube']} size="3x" />{' '}
              <span className="sr-only">Youtube</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="col">
        <BarRainbow />
      </div>
    </footer>
  );
}

export default Footer;
