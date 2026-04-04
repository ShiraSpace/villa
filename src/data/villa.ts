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
    whatsapp: string;
    whatsappDisplay: string;
    airbnbUrl: string;
    bookingComUrl: string;
    seanrentUrl: string;
  };
}

export const villaData: VillaData = {
  name: 'Baan Sook Villa',
  tagline: 'Happiness in a Jungle Paradise',
  description:
    'Experience unparalleled luxury in our stunning oceanfront villa, where contemporary elegance meets tropical serenity. Nestled on pristine shores, our exclusive retreat offers breathtaking views, world-class amenities, and an unforgettable escape from the ordinary.',
  capacity: {
    guests: 7,
    bedrooms: 3,
    bathrooms: 2,
  },
  contact: {
    email: 'happiness.house.phangan@gmail.com',
    phone: '+66-555-VILLA-01',
    whatsapp: '+66803685331',
    whatsappDisplay: '+66 803 685 331',
    airbnbUrl: 'https://www.airbnb.com/rooms/1588287133937803664',
    bookingComUrl: 'https://www.booking.com/hotel/th/santisuk-villa-koh-phangan.html',
    seanrentUrl: 'https://seanrent.bookingsboom.com/listing/22645/Koh-Phangan-SHIRA-property',
  },
};
