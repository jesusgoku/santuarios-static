import Head from 'next/head';
import ReCaptcha from 'react-google-recaptcha';
import { useRef } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import MainLayout from '@app/components/layouts/Main';

import styles from './Contact.module.css';

Yup.setLocale({
  mixed: { required: '${label} es un valor requerido' },
  string: { email: '${label} no es un valor valido' },
});

const ContactSchema = Yup.object().shape({
  initiative: Yup.string()
    .label('Iniciativa')
    .oneOf(['santuarios', 'caps', 'apus', 'mac'])
    .required(),
  name: Yup.string().label('Nombre').required(),
  email: Yup.string().label('E-mail').email().lowercase().required(),
  message: Yup.string().label('Mensaje').required(),
});

function Contact() {
  const isRecaptchaEnabled = process.env.NEXT_PUBLIC_RECAPTCHA_ENABLED;
  const reCaptchaRef = useRef();
  const [status, setStatus] = useState({ success: false, message: '' });

  async function handleSubmit(values, { setSubmitting, resetForm }) {
    return Promise.resolve()
      .then(() => {
        setStatus({ success: false, message: '' });
      })
      .then(() => isRecaptchaEnabled && reCaptchaRef.current.executeAsync())
      .then((token) => axios.post('/api/contact', { token, ...values }))
      .then((res) => {
        setSubmitting(false);
        isRecaptchaEnabled && resetForm();
        setStatus({ success: true, message: 'Mensaje enviado' });
      })
      .catch((err) => {
        setStatus({
          success: false,
          message: 'Ocurrió un error al intentar enviar el mensaje',
        });
      });
  }

  return (
    <MainLayout>
      <Head>
        <title>Contacto - Santuarios de Altura</title>
      </Head>

      <h2>Contacto</h2>

      <Formik
        initialValues={{ initiative: '', name: '', email: '', message: '' }}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          dirty,
          handleChange,
          handleSubmit,
          handleBlur,
          isSubmitting,
          isSubmitted,
          isValid,
        }) => (
          <form
            onSubmit={handleSubmit}
            className={dirty ? 'was-validated' : ''}
            noValidate
          >
            <div className="form-row">
              <div className="form-group col-md-6 col-lg-4">
                <label htmlFor="initiative">¿A quien deseas contactar?</label>
                <select
                  className="form-control"
                  id="initiative"
                  name="initiative"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.initiative}
                >
                  <option value="">Seleccione</option>
                  <option value="santuarios">Santuarios de Altura</option>
                  <option value="caps">CAPS</option>
                  <option value="apus">Apus Tutelares</option>
                  <option value="mac">MAC</option>
                </select>
                <div className="invalid-feedback">{errors.initiative}</div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6 col-lg-4">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <div className="invalid-feedback">{errors.name}</div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6 col-lg-4">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <div className="invalid-feedback">{errors.email}</div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="10"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              ></textarea>
              <div className="invalid-feedback">{errors.message}</div>
            </div>
            {isRecaptchaEnabled && (
              <ReCaptcha
                size="invisible"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                ref={reCaptchaRef}
              />
            )}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  Enviando <FontAwesomeIcon icon="spinner" spin />
                </>
              ) : (
                'Enviar'
              )}
            </button>{' '}
            {status.message && (
              <span className={status.success ? 'text-success' : 'text-danger'}>
                {status.message}{' '}
                <FontAwesomeIcon icon={status.success ? 'check' : 'times'} />
              </span>
            )}
          </form>
        )}
      </Formik>
    </MainLayout>
  );
}

export default Contact;
