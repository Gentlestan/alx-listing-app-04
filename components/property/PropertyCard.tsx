import { PropertyProps } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

interface PropertyCardProps {
    property: PropertyProps;
}

export default function PropertyCard({ property }: PropertyCardProps) {
    const { name, address, rating, category, price, offers, image, discount } = property;
    return (

        <Link href={`/property/${property.id}`} className="block group">
        <div className=" rounded-lg overflow-hidden shadow hover:shadow-lg transition">
        <Image
          src={image}
          alt={name}
          width={400}
          height={250}
          className="w-full h-56 object-cover"
        />
        <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500 text-sm">
          {address.city}, {address.country}
        </p>
        <p className="text-yellow-600 font-medium">⭐ {rating}</p>
        <p className="text-gray-600 text-sm">{category.join(" • ")}</p>

        <div className="mt-3 flex justify-between items-center">
          <p className="font-bold text-lg">${price}/night</p>
          {discount && (
            <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded">
              {discount}% off
            </span>
          )}
        </div>
      </div>
    </div>
    </Link>

    )
}