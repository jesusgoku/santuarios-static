import Image from 'next/image';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.Footer}>
      <h3>Contacto</h3>
      <ul className="list-unstyled">
        <li>
          Santuarios de Altura:{' '}
          <a href="mailto:santuariosdealtura@gmail.com">
            santuariosdealtura@gmail.com
          </a>
        </li>
        <li>
          CAPS:{' '}
          <a href="mailto:limpiezadelplomo@gmail.com">
            limpiezadelplomo@gmail.com
          </a>
        </li>
        <li>
          Apus Tutelares:{' '}
          <a href="mailto:apustutelares@gmail.com">apustutelares@gmail.com</a>
        </li>
        <li>
          MAC:{' '}
          <a href="mailto:montanismoaloscolegios@gmail.com">
            montanismoaloscolegios@gmail.com
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
