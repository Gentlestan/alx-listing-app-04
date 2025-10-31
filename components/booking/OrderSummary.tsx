import React from "react";

interface OrderSummaryProps {
  bookingDetails: {
    propertyName: string;
    price: number;
    bookingFee: number;
    totalNights: number;
    startDate: string;
    image?: string;
    rating?: number;
    reviewsCount?: number;
  };
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ bookingDetails }) => {
  const {
    propertyName,
    price,
    bookingFee,
    totalNights,
    startDate,
    image,
    rating,
    reviewsCount,
  } = bookingDetails;

  const grandTotal = bookingFee + price;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Review Order Details</h2>

      <div className="flex items-center mt-4">
        <img
          src={image || "/assets/hero.png"} // fallback image
          alt={propertyName}
          className="w-32 h-32 object-cover rounded-md"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{propertyName}</h3>
          {rating && reviewsCount ? (
            <p className="text-sm text-gray-500">
              ⭐ {rating} ({reviewsCount} reviews)
            </p>
          ) : (
            <p className="text-sm text-gray-400 italic">No reviews yet</p>
          )}
          <p className="text-sm text-gray-500">
            {startDate} • {totalNights} Nights
          </p>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="mt-6 space-y-2">
        <div className="flex justify-between">
          <p>Booking Fee</p>
          <p>${bookingFee}</p>
        </div>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>${price}</p>
        </div>
        <div className="flex justify-between font-semibold text-indigo-700">
          <p>Grand Total</p>
          <p>${grandTotal}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
