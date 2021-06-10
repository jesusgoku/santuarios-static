import Head from 'next/head';
import MainLayout from '@app/components/layouts/Main';

function SanctuariesHeight() {
  return (
    <MainLayout>
      <Head>
        <title>Santuarios de Altura - Santuarios de Altura</title>
      </Head>

      <h2>Santuarios de Altura</h2>
      <p>
        Somos una comunidad autofinanciada, sin fines de lucro, conformada por
        voluntarios de diversas formaciones. Valoramos y respetamos la
        diversidad de las personas, combinamos el deporte con el rescate de la
        Cultura Andina y el amor a las montañas y la naturaleza.
      </p>
      <p>
        Buscamos practicar Ayni (Reciprocidad) y hacer Ayllu (Comunidad), como
        parte de nuestro caminar y acercamiento a la Cultura Andina.
      </p>
    </MainLayout>
  );
}

export default SanctuariesHeight;
