import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <h1 className="text-xl font-semibold text-gray-800 cursor-pointer">
            EV Fuel Tracker
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
