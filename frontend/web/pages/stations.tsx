import { useEffect, useState } from 'react';
import api from '../utils/api'; // 👈 using the Axios instance
import StationCard from '../components/StationCard';

interface Station {
  id: number;
  location: string;
  provider: string;
  price: number;
}

export default function StationsPage() {
  const [stations, setStations] = useState<Station[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/stations')
      .then(res => {
        setStations(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching stations:", err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">EV Charging Stations</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {stations.map(station => (
            <StationCard
              key={station.id}
              location={station.location}
              provider={station.provider}
              price={station.price}
            />
          ))}
        </div>
      )}
    </main>
  );
}
