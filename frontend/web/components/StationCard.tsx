// frontend/web/components/StationCard.tsx
import React from 'react';

interface Station {
  id: number;
  location: string;
  provider: string;
  price: number;
}

interface Props {
  station: Station;
}

export default function StationCard({ station }: Props) {
  return (
    <div className="border border-gray-300 rounded-md p-4 shadow-sm hover:shadow-md transition">
      <h2 className="text-lg font-semibold">{station.location}</h2>
      <p className="text-gray-600">Provider: {station.provider}</p>
      <p className="text-green-600 font-bold text-xl">
        {station.price.toFixed(2)} €/kWh
      </p>
    </div>
  );
}
