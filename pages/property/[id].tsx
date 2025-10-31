import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Star, MapPin, Bed, ShowerHead, Users } from "lucide-react";

export default function PropertyDetails() {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return; // wait for router
    const fetchProperty = async () => {
      try {
        const res = await axios.get(`/api/property/${id}`);
        setProperty(res.data);
      } catch (error) {
        console.error("Error fetching property:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-20 text-gray-500">Loading property...</p>;
  }

  if (!property) {
    return <p className="text-center mt-20 text-red-500">Property not found.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-6 md:px-10">
      {/* Hero Image */}
      <div className="relative w-full h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-lg mb-10">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover"
          priority
        />
        {property.discount && (
          <div className="absolute top-5 left-5 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
            -{property.discount}%
          </div>
        )}
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{property.name}</h1>
          <div className="flex items-center text-gray-600">
            <MapPin size={18} className="mr-2 text-indigo-500" />
            <span>
              {property.address.city}, {property.address.state}, {property.address.country}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-yellow-500">
          <Star fill="currentColor" />
          <span className="text-lg font-semibold">{property.rating}</span>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-6">
        {property.category.map((tag: string, i: number) => (
          <span
            key={i}
            className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full border border-indigo-100"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Offers Summary */}
      <div className="grid grid-cols-3 gap-4 md:max-w-md mb-8 text-gray-700">
        <div className="flex items-center gap-2">
          <Bed className="text-indigo-500" size={20} />
          <span>{property.offers.bed} Beds</span>
        </div>
        <div className="flex items-center gap-2">
          <ShowerHead className="text-indigo-500" size={20} />
          <span>{property.offers.shower} Baths</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="text-indigo-500" size={20} />
          <span>{property.offers.occupants} Guests</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-10">
        {property.description ||
          "This luxurious property offers a serene atmosphere with breathtaking views and modern amenities. Perfect for families, couples, or group getaways. Experience comfort and elegance like never before."}
      </p>

      {/* Price Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-indigo-50 p-6 rounded-2xl shadow-inner">
        <div>
          <p className="text-gray-600">Price per night</p>
          <p className="text-3xl font-bold text-indigo-700">${property.price}</p>
        </div>
        <button className="mt-4 sm:mt-0 px-8 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-semibold shadow">
          Book Now
        </button>
      </div>
    </div>
  );
}
