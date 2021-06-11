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
