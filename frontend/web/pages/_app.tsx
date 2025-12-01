import '../styles/global.css'; // This loads Tailwind styles
import 'leaflet/dist/leaflet.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
