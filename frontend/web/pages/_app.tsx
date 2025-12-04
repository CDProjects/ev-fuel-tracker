import '../styles/global.css'; // This loads Tailwind styles
import 'leaflet/dist/leaflet.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-6xl mx-auto p-4">
        <Component {...pageProps} />
      </main>
    </div>
  );
}