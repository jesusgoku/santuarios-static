import Head from 'next/head';

import MainLayout from '@app/components/layouts/Main';

function Principles() {
  return (
    <MainLayout>
      <Head>
        <title>Principios - Santuarios de Altura</title>
      </Head>

      <h2>Principios</h2>

      <ul>
        <li>
          Potenciar el valor de la diversidad y de la diferencia en el marco de
          cada iniciativa.
        </li>
        <li>
          No persigue fines de lucro, ni reconocimientos personales y/o
          grupales.
        </li>
        <li>
          Estimular la conciencia ambiental en el marco de la cultura andina.
        </li>
        <li>
          Desarrollar y favorecer procesos de enseñanza-aprendizaje para la vida
          de carácter recíproco.
        </li>
        <li>
          Fortalecer las cualidades de cada uno de los y las participantes de la
          iniciativa desde una relación horizontal y basada en la confianza.
        </li>
        <li>Revindicar valores y saberes de la cultura andina.</li>
      </ul>
    </MainLayout>
  );
}

export default Principles;
