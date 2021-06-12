import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faHome,
  faComment,
  faMountain,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

import '@app/styles/globals.scss';

library.add(faEnvelope, faHome, faComment, faMountain, faInfoCircle);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
