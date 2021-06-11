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

      <h2>Bienvenidos a Santuarios de Altura</h2>
      <p>
        Nuestros caminar es construir comunidad con el marco de la filosofía
        andina, a partir de la generación de un despertar de la conciencia que
        ponga al centro la valoración de la diversidad ocupando como
        herramientas cada una de las iniciativas.
      </p>

      <h2>Iniciativas</h2>

      <div className="container">
        <div className="row">
          <div className="col-md">
            <Image
              src="/logo-caps.png"
              layout="responsive"
              width={100}
              height={100}
            ></Image>
            <h3>CAPS</h3>
            <p>
              Camino al Protector de Santiago (CAPS): Limpieza del Plomo, es una
              iniciativa que busca capacitar y promocionar prácticas de
              conservación.
            </p>
          </div>

          <div className="col-md">
            <Image
              src="/logo-apus.png"
              layout="responsive"
              width={100}
              height={100}
            ></Image>
            <h3>Apus Tutelares</h3>
            <p>
              Apus Tutelares es un Proyecto de la comunidad Santuarios de
              Altura, que busca contribuir a la revaloración del patrimonio
              material asociado a los Apus Tutelares (cerros y montañas).
            </p>
          </div>

          <div className="col-md">
            <Image
              src="/logo-mac.png"
              layout="responsive"
              width={100}
              height={100}
            ></Image>
            <h3>MAC</h3>
            {/* TODO: add description to MAC */}
            <p>Montañismo a los colegios</p>
          </div>
        </div>
      </div>

      <h2>Filosofía</h2>
      <p>
        En comunidad (ayllu) a partir de la reciprocidad (ayni) ofrendamos,
        educamos, limpiamos, reconocemos, valoramos, difundimos y conservamos
        los Santuarios de Altura.
      </p>

      <Link href="/mision-vision">
        <a className="btn btn-primary">Ver más</a>
      </Link>
    </MainLayout>
  );
}
