import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
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
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
