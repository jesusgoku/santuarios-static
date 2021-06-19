import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

import Header from '@app/components/presentational/Header';
import Footer from '@app/components/presentational/Footer';
import MainLayout from '@app/components/layouts/Main';
import BarRainbow from '@app/components/presentational/BarRainbow';

import styles from './Home.module.css';

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Santuarios de Altura</title>
        <meta name="description" content="Santuarios de Altura" />
      </Head>

      <div className={styles.Home__Header}>
        <div className="row">
          <div className="col-md">
            <img
              src="/logo-santuarios-square.png "
              className="img-fluid"
              alt="Logo: Santuarios de Altura"
            />
          </div>

          <div className={`col-md ${styles.Home__HeaderTitles}`}>
            <h1 className={styles.Home__HeaderTitle}>Santuarios de Altura</h1>
            <p className={styles.Home__HeaderDescription}>
              Somos una comunidad sin fines de lucro, conformada por
              voluntarios. Valoramos y respetamos la diversidad de las personas,
              combinamos el deporte con el rescate de la cultura andina y el
              amor a las montañas y la naturaleza.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.Home__Intro}>
        <h2 className={styles.Home__IntroTitle}>
          Bienvenidos a Santuarios de Altura
        </h2>
        <p>
          Nuestros caminar es construir comunidad con el marco de la filosofía
          andina, a partir de la generación de un despertar de la conciencia que
          ponga al centro la valoración de la diversidad ocupando como
          herramientas cada una de las iniciativas.
        </p>
      </div>

      <BarRainbow />

      <div className={styles.Home__Initiatives}>
        <h2 className={styles.Home__InitiativesTitle}>Iniciativas</h2>

        <div className="row">
          <div className="col-md">
            <Image
              src="/logo-caps.png"
              layout="responsive"
              width={100}
              height={100}
              alt="Logo: CAPS"
            ></Image>
            <h3 className={styles.Home__InitiativeTitle}>CAPS</h3>
            <p>
              Camino al Protector de Santiago (CAPS): Limpieza del Plomo, es una
              iniciativa que busca capacitar y promocionar prácticas de
              conservación.{' '}
            </p>
            <p>
              <Link href="/iniciativas/caps/que-es">Saber más.</Link>
            </p>
          </div>

          <div className="col-md">
            <Image
              src="/logo-apus.png"
              layout="responsive"
              width={100}
              height={100}
              alt="Logo: APUS"
            ></Image>
            <h3 className={styles.Home__InitiativeTitle}>Apus Tutelares</h3>
            <p>
              Apus Tutelares es un Proyecto de la comunidad Santuarios de
              Altura, que busca contribuir a la revaloración del patrimonio
              material asociado a los Apus Tutelares (cerros y montañas).{' '}
            </p>
            <p>
              <Link href="/iniciativas/apus/que-es">Saber más.</Link>
            </p>
          </div>

          <div className="col-md">
            <Image
              src="/logo-mac.png"
              layout="responsive"
              width={100}
              height={100}
              alt="Logo: MAC"
            ></Image>
            <h3 className={styles.Home__InitiativeTitle}>MAC</h3>
            <p>
              Montañismo a los Colegios (MAC): que lleva la cultura andina y
              enseñanza del cuidado de la naturaleza a profesores y niños de
              colegios, usando como principal herramienta el montañismo.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.Home__Philosophy}>
        <h2 className={styles.Home__PhilosophyTitle}>Filosofía</h2>
        <p>
          En comunidad (ayllu) a partir de la reciprocidad (ayni) ofrendamos,
          educamos, limpiamos, reconocemos, valoramos, difundimos y conservamos
          los Santuarios de Altura.{' '}
        </p>
        <p>
          <Link href="/acerca-de/mision-vision">Sabes más.</Link>
        </p>
      </div>
    </MainLayout>
  );
}
