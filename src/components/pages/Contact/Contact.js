import Head from 'next/head';

import MainLayout from '@app/components/layouts/Main';

import styles from './Contact.module.css';

function Contact() {
  return (
    <MainLayout>
      <Head>
        <title>Contacto - Santuarios de Altura</title>
      </Head>

      <h2>Contacto</h2>

      <form method="POST">
        <div className="form-row">
          <div className="form-group col-md-6 col-lg-4">
            <label for="initiative">¿A quien deseas contactar?</label>
            <select className="form-control" id="initiative" name="initiative">
              <option>Seleccione</option>
              <option value="santuarios">Santuarios de Altura</option>
              <option value="caps">CAPS</option>
              <option value="apus">Apus Tutelares</option>
              <option value="mac">MAC</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6 col-lg-4">
            <label for="name">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6 col-lg-4">
            <label for="email">E-mail</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              required
            />
          </div>
        </div>

        <div class="form-group">
          <label for="message">Mensaje</label>
          <textarea
            class="form-control"
            id="message"
            name="message"
            rows="10"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </MainLayout>
  );
}

export default Contact;
