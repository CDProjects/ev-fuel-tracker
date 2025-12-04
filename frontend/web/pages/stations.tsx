// frontend/web/pages/stations.tsx
import { useEffect, useState } from 'react';
import api from '../utils/api';
import StationCard from '../components/StationCard';
import StationMap from '../components/StationMap';

interface Station {
  id: number;
  location: string;
  provider: string;
  price: number;
  lat: number;
  lng: number;
}

export default function StationsPage() {
  const [stations, setStations] = useState<Station[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get<Station[]>('/stations')
      .then((res) => {
        setStations(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching stations:', err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">EV Charging Stations</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* Map Section */}
          <div className="h-[500px] mb-8">
            <StationMap
              stations={stations}
              center={[60.3932, 25.6673]} // Porvoo default center
              zoom={12}
            />
          </div>

          {/* Station Cards */}
          <div className="grid md:grid-cols-2 gap-4">
            {stations.map((st) => (
              <StationCard key={st.id} station={st} />
            ))}
          </div>
        </>
      )}
    </main>
  );
}
