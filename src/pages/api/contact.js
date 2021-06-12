import url from 'url';
import axios from 'axios';
import nodemailer from 'nodemailer';

const recipients = {
  santuarios: process.env.NEXT_PUBLIC_CONTACT_SANTUARIOS,
  caps: process.env.NEXT_PUBLIC_CONTACT_CAPS,
  apus: process.env.NEXT_PUBLIC_CONTACT_APUS,
  mac: process.env.NEXT_PUBLIC_CONTACT_MAC,
};

function makeTextBody(values) {
  return Object.entries(values)
    .map(([field, value]) => `${field}: ${value}`)
    .join('\n');
}

function makeHtmlBody(values) {
  return Object.entries(values)
    .map(
      ([field, value]) =>
        `<p><strong>${field}</strong>: ${value.replace(/\n/g, '<br />')}</p>`
    )
    .join('\n');
}

function parseBooleanString(value) {
  return !!(typeof value === 'string'
    ? value.match(/^(true|yes|on|1)$/i)
    : value);
}

function sendMail(options) {
  const createTransportOptions = {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: parseBooleanString(process.env.SMTP_SECURE),
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  };
  const transport = nodemailer.createTransport(createTransportOptions);

  return transport.sendMail(options);
}

function validateToken(token) {
  const data = {
    secret: process.env.RECAPTCHA_SECRET_KEY,
    response: token,
  };
  const params = new url.URLSearchParams(data);

  return axios
    .post('https://www.google.com/recaptcha/api/siteverify', params.toString())
    .then((res) => {
      if (!res.data.success) {
        throw new Error(res.data['error-codes'].join('\n'));
      }

      return true;
    });
}

async function contactHandler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  const isRecaptchaEnabled = process.env.NEXT_PUBLIC_RECAPTCHA_ENABLED;
  const { token, initiative, ...values } = req.body;

  const sendMailOptions = {
    from: `"${values.name}" <${values.email}>`,
    to: recipients[initiative],
    subject: 'Contacto desde santuariosdealtura.cl',
    text: makeTextBody(values),
    html: makeHtmlBody(values),
  };

  Promise.resolve()
    .then(() => isRecaptchaEnabled && validateToken(token))
    .then(() => sendMail(sendMailOptions))
    .then(() => {
      res.status(200).json({ message: 'success', success: true });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message, success: false });
    });
}

export default contactHandler;
