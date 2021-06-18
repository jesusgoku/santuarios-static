import Head from 'next/head';

import MainLayout from '@app/components/layouts/Main';

function Apus() {
  return (
    <MainLayout>
      <Head>
        <title>APUS - Santuarios de Altura</title>
      </Head>

      <h2>¿Qué es Apus Tutelares?</h2>
      <p>
        Apus Tutelares es un Proyecto de la comunidad Santuarios de Altura, que
        busca contribuir a la revaloración del patrimonio material asociado a
        los Apus Tutelares (cerros y montañas) y al patrimonio inmaterial
        relacionado con el vínculo, historias y/o expresiones culturales que
        tienen algunas comunidades con estas montañas.
      </p>
      <p>
        El proyecto Apus Tutelares, busca identificar estas expresiones
        culturales, descubrir los vínculos existentes y construir las historias
        de estas montañas y de su gente, de acuerdo con el significado y sentir
        de las propias personas, reconociendo la importancia actual de los Apus
        Tutelares como patrimonio, cultural, natural y arqueológico.
      </p>
      <p>
        Nuestro trabajo consiste en la documentación y registro fotográfico de
        los sitios arqueológicos de altura y del paisaje natural asociados a los
        Apus Tutelares y el registro audiovisual mediante entrevistas realizadas
        a la comunidad.Con este propósito, es que visitamos a las comunidades
        cercanas al Apu y recogemos la historia y vivencias de las personas, con
        la finalidad de educar y difundir el valor de nuestro patrimonio
        cultural.
      </p>
      <p>
        Toda la información reunida, se utilizará para educación y difusión
        gratuita, y será publicada principalmente a través de una página web de
        libre acceso diseñada exclusivamente para estos fines y a través de
        presentaciones públicas gratuitas en colegios y/o organizaciones varias.
        En un futuro, esta información formará parte de un libro que compilará
        la historia de los Apus Tutelares de Chile.
      </p>

      <h2>Misión</h2>
      <p>
        Somos una Iniciativa cuyo propósito es poner en valor la importancia
        cultural y patrimonial de los Apus Tutelares, recuperando y difundiendo
        la historia y el vínculo de Éstos con las comunidades.
      </p>

      <h2>Visión</h2>
      <p>
        Contribuir a la revaloración de los Apus Tutelares, de la cultura andina
        y de las comunidades que poseen vínculos con Éstos, mediante la
        documentación y registro in situ de los sitios patrimoniales y su
        historia, con el fin de educar y difundir su importancia.
      </p>

      <h2>Objetivos</h2>
      <ol>
        <li>
          Preparar y editar Libro: “Apus Tutelares de Chile” que recopilará el
          registro y documentación de los Apus Tutelares Andinos.
        </li>
        <li>
          Desarrollar página web:{' '}
          <a href="https://apustutelares.com/" target="_blank">
            https://apustutelares.com/
          </a>{' '}
          con el fin de difundir los trabajos en desarrollo y resultados de las
          investigaciones de los distintos Apus Tutelares.
        </li>
        <li>
          Aprender y aprehender a hacer comunidad y practicar la reciprocidad
          durante el desarrollo del proyecto.
        </li>
      </ol>
    </MainLayout>
  );
}

export default Apus;
