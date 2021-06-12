import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faHome,
  faComment,
  faMountain,
  faInfoCircle,
  faSpinner,
  faThumbsUp,
  faThumbsDown,
  faCheck,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagramSquare,
  faFacebookSquare,
  faYoutubeSquare,
  faInstagram,
  faFacebook,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import '@app/styles/globals.scss';

library.add(
  faEnvelope,
  faHome,
  faComment,
  faMountain,
  faInfoCircle,
  faSpinner,
  faThumbsUp,
  faThumbsDown,
  faCheck,
  faTimes,

  faInstagramSquare,
  faFacebookSquare,
  faYoutubeSquare,
  faInstagram,
  faFacebook,
  faYoutube
);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
