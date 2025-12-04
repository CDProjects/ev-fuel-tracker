// frontend/web/components/StationMap.tsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';

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

export default function StationMap({ stations, center, zoom = 13 }: StationMapProps) {
  return (
    <MapContainer
      center={center as LatLngExpression}
      zoom={zoom}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {stations.map((st) => (
        <Marker key={st.id} position={[st.lat, st.lng]}>
          <Popup>
            <strong>{st.location}</strong><br />
            Provider: {st.provider}<br />
            Price: {st.price.toFixed(2)} €/kWh
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
