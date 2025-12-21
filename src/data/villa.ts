export interface VillaData {
  name: string;
  tagline: string;
  description: string;
  capacity: {
    guests: number;
    bedrooms: number;
    bathrooms: number;
  };
  contact: {
    email: string;
    phone: string;
  };
}

export const villaData: VillaData = {
  name: 'S̄ạntis̄uk̄h Villa',
  tagline: 'Where Luxury Meets Paradise',
  description:
    'Experience unparalleled luxury in our stunning oceanfront villa, where contemporary elegance meets tropical serenity. Nestled on pristine shores, our exclusive retreat offers breathtaking views, world-class amenities, and an unforgettable escape from the ordinary.',
  capacity: {
    guests: 7,
    bedrooms: 3,
    bathrooms: 2,
  },
  contact: {
    email: 'info@santisukh-villa.com',
    phone: '+66-555-VILLA-01',
  },
};
