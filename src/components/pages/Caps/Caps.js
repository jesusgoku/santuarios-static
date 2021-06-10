import Head from 'next/head';

import MainLayout from '@app/components/layouts/Main';

function Caps() {
  return (
    <MainLayout>
      <Head>
        <title>CAPS - Santuarios de Altura</title>
      </Head>

      <h2>¿Qué es CAPS?</h2>

      <p>
        Camino al Protector de Santiago (CAPS): Limpieza del Plomo, es una
        iniciativa que busca capacitar y promocionar prácticas de conservación,
        cuidado y limpieza de los espacios naturales y culturales en los que se
        desarrolla el montanismo.
      </p>

      <p>
        Como objetivo general busca valorar la práctica del montañismo desde una
        perspectiva cultural, patrimonial, medioambiental, de libre acceso y
        deportiva.
      </p>

      <p>
        Para ello, cada año desde el 2013, se forma un Equipo CAPS conformado
        por integrantes de la comunidad de Santuarios de Altura, el cual prepara
        y organiza un nuevo ciclo CAPS en donde se hace un llamado público a
        voluntarios para participar de este proceso de crecimiento y aprendizaje
        que dura alrededor de 6 meses y que comienza con la capacitación de los
        interesados mediante charlas y talleres, para luego continuar con la
        preparación física y técnica mediante el desarrollo de actividades en
        terreno que consisten principalmente en el ascenso sistemático de
        cerros, cuya exigencia va en aumento hasta culminar con la visita y
        limpieza del Cerro El Plomo (5.424 msnm).
      </p>

      <p>
        Así, desde el año 2013, todos los veranos se reúnen del orden de 40
        voluntarios para la limpieza de cerros como La Parva, El Pintor,
        Leoneras, Cerro la Cruz, Quebrada de Macul, Cerro Conchalí, Canoítas,
        Provincia, entre otros, para culminar finalmente, con la limpieza del
        cerro que inspiró a esta iniciativa, el Apu Tutelar y protector de
        Santiago, el cerro El Plomo.
      </p>

      <h3>Visión</h3>

      <p>
        Contribuir a que el montañismo se convierta en una práctica responsable,
        desde las perspectivas de seguridad, conservación y cuidado de los
        espacios naturales, y la puesta en valor de la cultura Andina.
      </p>

      <h3>Pilares</h3>
      <ul>
        <li>Cultura</li>
        <li>Montañismo</li>
        <li>Huella leve</li>
      </ul>
    </MainLayout>
  );
}

export default Caps;
