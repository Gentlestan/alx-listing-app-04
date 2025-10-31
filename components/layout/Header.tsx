import React from "react";
import Image from "next/image";
import { Search } from "lucide-react"; // install with: npm install lucide-react

const types = [
  "Rooms",
  "Mansions",
  "Countryside",
  "Villas",
  "Tropical",
  "New",
  "Amazing Pools",
  "Beach House",
  "Beachfront",
  "Island",
  "Camping",
  "Apartments",
  "House",
  "LakeFront",
  "FarmHouse",
  "Treehouse",
  "Cabins",
  "Castles",
];

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm px-4 mb-2">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 mb-2">
        {/* -------- Logo -------- */}
        <div className="flex items-center gap-2">
          {/* Place your logo image in /public and update the path if needed */}
          <Image src="/assets/logo.png" alt="Logo" width={40} height={40} className="bg-[#222222]"/>
        </div>

        {/* -------- Search Bar -------- */}
        <div className="hidden md:flex items-center rounded-full border border-gray-200 shadow-sm overflow-hidden">
          {/* Location */}
          <div className="px-4 py-2 flex flex-col cursor-pointer hover:bg-gray-50">
            <span className="text-[10px] uppercase tracking-wide text-gray-500">
              Location
            </span>
            <span className="text-sm text-gray-800">Search destination</span>
          </div>

          <span className="text-gray-300">|</span>

          {/* Check In */}
          <div className="px-4 py-2 flex flex-col cursor-pointer hover:bg-gray-50">
            <span className="text-[10px] uppercase tracking-wide text-gray-500">
              Check in
            </span>
            <span className="text-sm text-gray-800">Add date</span>
          </div>

          <span className="text-gray-300">|</span>

          {/* Check Out */}
          <div className="px-4 py-2 flex flex-col cursor-pointer hover:bg-gray-50">
            <span className="text-[10px] uppercase tracking-wide text-gray-500">
              Check out
            </span>
            <span className="text-sm text-gray-800">Add date</span>
          </div>

          <span className="text-gray-300">|</span>

          {/* People */}
          <div className="px-4 py-2 flex flex-col cursor-pointer hover:bg-gray-50">
            <span className="text-[10px] uppercase tracking-wide text-gray-500">
              People
            </span>
            <span className="text-sm text-gray-800">Add guests</span>
          </div>

          {/* Search Icon */}
          <button
            type="button"
            className="ml-2 mr-2 flex h-10 w-10 items-center justify-center rounded-full border border-white"
            style={{ backgroundColor: "#FFA800" }}
          >
            <Search className="h-4 w-4 text-white" />
          </button>
        </div>

        {/* -------- Auth Buttons -------- */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-full px-4 py-2 text-white"
            style={{ backgroundColor: "#34967C" }}
          >
            Sign In
          </button>
          <button
            type="button"
            className="rounded-full border px-4 py-2"
            style={{ borderColor: "#ECECEC", color: "#000000" }}
          >
            Sign Up
          </button>
        </div>
        
      </div>
       {/* Types of accommodation */}
      <div className="flex flex-wrap gap-2">
        {types.map((type) => (
          <span
            key={type}
            className="px-3 py-1 bg-gray-100 rounded-full text-sm cursor-pointer hover:bg-gray-200"
          >
            {type}
          </span>
        ))}
      </div>
    </header>
  );
};

export default Header;
