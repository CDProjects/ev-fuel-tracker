// frontend/web/pages/stations.tsx
import { useEffect, useState } from "react";
import api from "../utils/api";
import StationCard from "../components/StationCard";
import dynamic from "next/dynamic";

const StationMap = dynamic(() => import("../components/StationMap"), {
  ssr: false,
});

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
    api
      .get<Station[]>("/stations")
      .then((res) => {
        setStations(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching stations:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col gap-8 mt-6">
      {/* PAGE TITLE */}
      <h1 className="text-2xl font-bold text-gray-800">
        EV Charging Stations
      </h1>

      {loading ? (
        <p className="text-gray-600">Loading stations…</p>
      ) : (
        <>
          {/* MAP SECTION */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">
              Nearby Stations Map
            </h2>

            <div className="h-[450px] w-full rounded-lg overflow-hidden shadow">
              <StationMap
                stations={stations}
                center={[60.3932, 25.6673]} // Porvoo default
                zoom={12}
              />
            </div>
          </section>

          {/* LIST SECTION */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">
              Station List
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {stations.map((st) => (
                <StationCard key={st.id} station={st} />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
