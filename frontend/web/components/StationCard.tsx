// frontend/web/components/StationCard.tsx
import React from 'react';

interface StationCardProps {
  location: string;
  provider: string;
  price: number;
}

const StationCard: React.FC<StationCardProps> = ({ location, provider, price }) => {
  return (
    <div className="border border-gray-300 rounded-md p-4 shadow-sm hover:shadow-md transition">
      <h2 className="text-lg font-semibold">{location}</h2>
      <p className="text-gray-600">Provider: {provider}</p>
      <p className="text-green-600 font-bold text-xl">{price} €/kWh</p>
    </div>
  );
};

export default StationCard;
