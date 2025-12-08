// frontend/web/components/StationMap.tsx
import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { LatLngBounds, LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

interface Station {
  id: number;
  location: string;
  provider: string;
  price: number;
  lat: number;
  lng: number;
}

interface StationMapProps {
  stations: Station[];
  center: LatLngExpression;
  zoom?: number;
}

/* -------------------------------
   Component to auto-fit map bounds
-------------------------------- */
function FitBounds({ stations }: { stations: Station[] }) {
  const map = useMap();

  useEffect(() => {
    if (!stations || stations.length === 0) return;

    const bounds = new LatLngBounds(
      stations.map((st) => [st.lat, st.lng]) as [number, number][]
    );

    map.fitBounds(bounds, { padding: [50, 50] });
  }, [stations, map]);

  return null;
}

/* -------------------------------
      Main Map Component
-------------------------------- */
export default function StationMap({
  stations,
  center,
  zoom = 13,
}: StationMapProps) {
  const [userPosition, setUserPosition] = useState<LatLngExpression | null>(
    null
  );

  /* ----- Get user location (if allowed) ----- */
  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserPosition([pos.coords.latitude, pos.coords.longitude]);
      },
      () => {
        // Permission denied or unavailable – we simply ignore and use default
        setUserPosition(null);
      }
    );
  }, []);

  return (
    <MapContainer
      center={userPosition ?? center}
      zoom={zoom}
      className="w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-lg"
      scrollWheelZoom={true}
    >
      {/* Map Tiles */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Auto-fit map to station markers */}
      {stations.length > 0 && <FitBounds stations={stations} />}

      {/* Station markers */}
      {stations.map((st) => (
        <Marker key={st.id} position={[st.lat, st.lng]}>
          <Popup>
            <strong>{st.location}</strong>
            <br />
            Provider: {st.provider}
            <br />
            Price: {st.price.toFixed(2)} €/kWh
          </Popup>
        </Marker>
      ))}

      {/* User location marker */}
      {userPosition && (
        <Marker position={userPosition}>
          <Popup>You are here 📍</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
