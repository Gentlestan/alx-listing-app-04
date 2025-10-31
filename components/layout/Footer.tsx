// components/layout/Footer.tsx
import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-[#CACACA] py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-12">
        {/* Left section: Logo + description */}
        <div className="flex-1">
          <div className="text-white text-2xl font-bold mb-4 flex items-center gap-2">
            <Image
              src="/assets/logo.png"
              width={40}
              height={40}
              alt="company-logo"
            />
            <span>ALX</span>
          </div>
          <p className="text-[#CACACA] text-sm">
            ALX is a platform where travelers can discover and book unique,
            comfortable, and affordable lodging options worldwide. From cozy city
            apartments and tranquil countryside retreats to exotic beachside
            villas, ALX connects you with the perfect place to stay for any trip.
          </p>
        </div>

        {/* Right section: Links */}
        <div className="flex-1 flex flex-wrap justify-between gap-8">
          {/* Explore */}
          <div className="flex flex-col mb-6 md:mb-0">
            <h2 className="text-white font-semibold mb-2">Explore</h2>
            <ul className="space-y-1 text-sm">
              <li>Apartments in Dubai</li>
              <li>Hotels in New York</li>
              <li>Villa in Spain</li>
              <li>Mansion in Indonesia</li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col mb-6 md:mb-0">
            <h2 className="text-white font-semibold mb-2">Company</h2>
            <ul className="space-y-1 text-sm">
              <li>About us</li>
              <li>Blog</li>
              <li>Career</li>
              <li>Customers</li>
              <li>Brand</li>
            </ul>
          </div>

          {/* Help */}
          <div className="flex flex-col">
            <h2 className="text-white font-semibold mb-2">Help</h2>
            <ul className="space-y-1 text-sm">
              <li>Support</li>
              <li>Cancel booking</li>
              <li>Refunds Process</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom row: policies */}
      <div className="mt-12 border-t border-[#444] pt-4 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
        <p>
          Some hotel requires you to cancel more than 24 hours before check-in.Details <span className="text-[#34967C]">here</span>
        </p>
        <ul className="flex flex-wrap gap-4 md:gap-6">
          <li>Terms of Service</li>
          <li>Policy service</li>
          <li>Cookies Policy</li>
          <li>Partners</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
