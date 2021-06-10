import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

import Header from '@app/components/presentational/Header';
import Footer from '@app/components/presentational/Footer';
import MainLayout from '@app/components/layouts/Main';

import styles from './Home.module.css';

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Santuarios de Altura</title>
        <meta name="description" content="Santuarios de Altura" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.Home__Header}>
        <h1 className={styles.Home__HeaderTitle}>Santuarios de Altura</h1>
        <p className={styles.Home__HeaderDescription}>
          Somos una comunidad sin fines de lucro, conformada por voluntarios.
          Valoramos y respetamos la diversidad de las personas, combinamos el
          deporte con el rescate de la cultura andina y el amor a las montañas y
          la naturaleza.
        </p>
      </div>

      <p>Bienvenidos a Santuarios de Altura</p>
      <p>
        Nuestros caminar es construir comunidad con el marco de la filosofía
        andina, a partir de la generación de un despertar de la conciencia que
        ponga al centro la valoración de la diversidad ocupando como
        herramientas cada una de las iniciativas.
      </p>

      <p>iniciativas</p>

      <p>CAPS</p>
      <p>
        Camino al Protector de Santiago (CAPS): Limpieza del Plomo, es una
        iniciativa que busca capacitar y promocionar prácticas de conservación.
      </p>

      <p>Apus Tutelares</p>
      <p>
        Apus Tutelares es un Proyecto de la comunidad Santuarios de Altura, que
        busca contribuir a la revaloración del patrimonio material asociado a
        los Apus Tutelares (cerros y montañas).
      </p>

      <p>MAC</p>
      {/* TODO: add description to MAC */}
      <p>Montañismo a los colegios</p>

      <p>Filosofía</p>
      <p>
        En comunidad (ayllu) a partir de la reciprocidad (ayni) ofrendamos,
        educamos, limpiamos, reconocemos, valoramos, difundimos y conservamos
        los Santuarios de Altura.
      </p>

      <Link href="/mision-vision">
        <a class="btn btn-primary">Ver más</a>
      </Link>
    </MainLayout>
  );
}
