import Head from 'next/head';

import Footer from '@app/components/presentational/Footer';
import Header from '@app/components/presentational/Header';

import styles from './Main.module.css';

function MainLayout({ children }) {
  return (
    <>
      <Head>
        <title>Santuarios de Altura</title>
        <meta name="description" content="Santuarios de Altura" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <div className="container">
        <div className="row">
          <div className="col"></div>
        </div>

        <div className={`row ${styles.Main__Row}`}>
          <div className="col">
            <main className={styles.Main}>{children}</main>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
