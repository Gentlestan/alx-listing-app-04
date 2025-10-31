import React, { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { PropertyProps } from "@/interfaces";
import Image from "next/image";
import { HERO_IMAGE } from "@/constants/property";
import axios from "axios";
import PropertyCard from "@/components/property/PropertyCard";

// simple Pill component
const Pill: React.FC<{ label: string }> = ({ label }) => (
  <button className="px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm hover:bg-indigo-200">
    {label}
  </button>
);

const filters = [
  "Top Villa",
  "Self Checkin",
  "Beachfront",
  "Luxury",
  "Mountain View",
];

export default function HomePage() {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        // ✅ Always start API path with `/`
        const response = await axios.get("/api/property");
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <Layout>
        <p className="text-center py-20 text-gray-600">Loading...</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div>
        {/* Hero Section */}
        <section className="relative w-full h-[80vh]">
          <Image
            src={HERO_IMAGE}
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Find your favorite place here!
            </h1>
            <p className="text-lg md:text-2xl text-white drop-shadow-md">
              The best prices for over 2 million properties worldwide.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="max-w-7xl mx-auto px-4 py-8 flex flex-wrap gap-3 justify-center">
          {filters.map((f) => (
            <Pill key={f} label={f} />
          ))}
        </section>

        {/* Listing Section */}
        <section className="max-w-7xl mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </section>
      </div>
    </Layout>
  );
}
