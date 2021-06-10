import Head from 'next/head';
import MainLayout from '@app/components/layouts/Main';

function MissionAndVision() {
  return (
    <MainLayout>
      <Head>
        <title>Misión y Visión - Santuarios de Altura</title>
      </Head>

      <h2>Misión y Visión</h2>
      <p>
        Filosofía (Misión): En comunidad (ayllu) a partir de la reciprocidad
        (ayni) ofrendamos, educamos, limpiamos, reconocemos, valoramos,
        difundimos y conservamos los Santuarios de Altura.
      </p>
      <p>
        Nuestro caminar (Visión): Construir comunidad, en el marco de la
        filosofía andina, a partir de la generación de un despertar de la
        conciencia, que ponga al centro la valoración de la diversidad ocupando
        como herramientas cada una de las iniciativas.
      </p>
    </MainLayout>
  );
}

export default MissionAndVision;
