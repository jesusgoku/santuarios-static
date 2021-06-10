import Head from 'next/head';

import Footer from '@app/components/presentational/Footer';
import Header from '@app/components/presentational/Header';

import styles from './Main.module.css';

function MainLayout({ children }) {
  return (
    <div className="container">
      <Head>
        <title>Santuarios de Altura</title>
        <meta name="description" content="Santuarios de Altura" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <main className={styles.Main}>{children}</main>
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;
