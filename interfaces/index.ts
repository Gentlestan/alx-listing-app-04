// interfaces/index.ts:

export interface PropertyProps {
  id: number;
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];   // e.g. ["Luxury Villa", "Pool", "Free Parking"]
  price: number;
  offers: {
    bed: string;        // keep as string if your sample data is "3"
    shower: string;     // same here
    occupants: string;  // e.g. "4-6"
  };
  image: string;        // URL or /public path
  discount: string;     // e.g. "30" or empty string if no discount
}
