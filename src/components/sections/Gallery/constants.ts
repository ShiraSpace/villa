export interface GalleryImage {
  src: string;
  alt: string;
  category: GalleryCategory;
  tall?: boolean;
}

export type GalleryCategory = 'exterior' | 'interior' | 'bedrooms' | 'pool-views';

export interface CategoryFilter {
  id: GalleryCategory | 'all';
  label: string;
}

export const GALLERY_CONTENT = {
  SUBTITLE: 'Explore the Villa',
  CATEGORIES: [
    { id: 'all', label: 'All' },
    { id: 'pool-views', label: 'Pool & Views' },
    { id: 'exterior', label: 'Exterior' },
    { id: 'interior', label: 'Interior' },
    { id: 'bedrooms', label: 'Bedrooms' },
  ] as CategoryFilter[],
  IMAGES: [
    {
      src: '/images/gallery/garden/garden-vertical.jpg',
      alt: 'Villa garden',
      category: 'exterior',
      tall: true,
    },
    {
      src: '/images/gallery/exterior/exterior-pool.jpg',
      alt: 'Villa pool view',
      category: 'pool-views',
      tall: true,
    },
    {
      src: '/images/gallery/interior/entrance-door-vertical.jpg',
      alt: 'Welcome entrance',
      category: 'interior',
      tall: true,
    },
    {
      src: '/images/gallery/guests-bedroom/guests-bedroom-vertical.jpg',
      alt: 'Guest bedroom',
      category: 'bedrooms',
      tall: true,
    },
    {
      src: '/images/gallery/interior/living-room-tv.jpg',
      alt: 'Living room TV area',
      category: 'interior',
    },
    {
      src: '/images/gallery/exterior/pool-vibe.jpg',
      alt: 'Villa pool view',
      category: 'pool-views',
    },
    {
      src: '/images/gallery/master-bedroom/master-bedroom-closet.jpg',
      alt: 'Master bedroom closet',
      category: 'bedrooms',
    },
    {
      src: '/images/gallery/interior/living-room-wine.jpg',
      alt: 'Living room',
      category: 'interior',
    },
    {
      src: '/images/gallery/master-bedroom/master-bedroom-bed.jpg',
      alt: 'Master bedroom',
      category: 'bedrooms',
    },
    {
      src: '/images/gallery/master-bedroom/master-bedroom-vibe.jpg',
      alt: 'Master bedroom ambiance',
      category: 'bedrooms',
    },
    {
      src: '/images/gallery/exterior/balcony-and-pool-front.jpg',
      alt: 'Pool front view',
      category: 'pool-views',
    },
    {
      src: '/images/gallery/entrance/entrance-plant.jpg',
      alt: 'Entrance with plants',
      category: 'exterior',
    },
    {
      src: '/images/gallery/interior/kitchen-front.jpg',
      alt: 'Kitchen',
      category: 'interior',
    },
    {
      src: '/images/gallery/master-bedroom/bedroom-1.jpg',
      alt: 'Master bedroom',
      category: 'bedrooms',
    },
    {
      src: '/images/gallery/exterior/balcony-and-pool.jpg',
      alt: 'Balcony and pool',
      category: 'pool-views',
    },
    {
      src: '/images/gallery/exterior/balcony-master-side.jpg',
      alt: 'Master bedroom balcony',
      category: 'pool-views',
    },
    {
      src: '/images/gallery/interior/living-room-sofa.jpg',
      alt: 'Living room sofa',
      category: 'interior',
    },
    {
      src: '/images/gallery/master-bedroom/master-bedroom-vertical.jpg',
      alt: 'Master bedroom',
      category: 'bedrooms',
    },
    {
      src: '/images/gallery/interior/kitchen-1.jpg',
      alt: 'Modern kitchen',
      category: 'interior',
    },
    {
      src: '/images/gallery/master-bedroom/master-bedroom-working-table.jpg',
      alt: 'Master bedroom working table',
      category: 'bedrooms',
    },
    {
      src: '/images/gallery/guests-bedroom/guests-bedroom-view.jpg',
      alt: 'Guest bedroom view',
      category: 'bedrooms',
    },
    {
      src: '/images/gallery/exterior/balcony-and-pool-from-inside.jpg',
      alt: 'Pool view from inside',
      category: 'pool-views',
    },
    {
      src: '/images/gallery/interior/kitchen-brad.jpg',
      alt: 'Kitchen detail',
      category: 'interior',
    },
    {
      src: '/images/gallery/exterior/balcony-and-inside.jpg',
      alt: 'Balcony inside view',
      category: 'pool-views',
    },
    {
      src: '/images/gallery/exterior/outside-table.jpg',
      alt: 'Outdoor dining table',
      category: 'pool-views',
    },
    {
      src: '/images/gallery/interior/kitchen-vibe.jpg',
      alt: 'Kitchen ambiance',
      category: 'interior',
    },
    {
      src: '/images/gallery/exterior/exterior-side-garden.jpg',
      alt: 'Villa garden side',
      category: 'pool-views',
    },
    {
      src: '/images/gallery/exterior/pool-side.jpg',
      alt: 'Pool side',
      category: 'pool-views',
    },
    {
      src: '/images/gallery/exterior/outside-towels.jpg',
      alt: 'Poolside towels',
      category: 'pool-views',
    },
    {
      src: '/images/gallery/interior/interior-bathroom-vertical.jpg',
      alt: 'Bathroom',
      category: 'interior',
    },
    {
      src: '/images/gallery/garden/exterior-garden-2.jpg',
      alt: 'Villa scenic view',
      category: 'exterior',
    },
    {
      src: '/images/gallery/exterior/exterior-backside.jpg',
      alt: 'Villa back view',
      category: 'exterior',
    },
    {
      src: '/images/gallery/interior/interior-bathroom-1.jpg',
      alt: 'Bathroom',
      category: 'interior',
    },
    {
      src: '/images/gallery/guests-bedroom/guests-bedroom-bathroom.jpg',
      alt: 'Guest bathroom',
      category: 'bedrooms',
    },
    {
      src: '/images/gallery/garden/garden-1.jpg',
      alt: 'Villa garden',
      category: 'exterior',
    },
    {
      src: '/images/gallery/exterior/outside-vibe.jpg',
      alt: 'Villa exterior',
      category: 'exterior',
    },
    {
      src: '/images/gallery/interior/interior-bathroom-2.jpg',
      alt: 'Bathroom',
      category: 'interior',
    },
    {
      src: '/images/gallery/guests-bedroom/working-station.jpg',
      alt: 'Working station',
      category: 'bedrooms',
    },
    {
      src: '/images/gallery/interior/interior-bathroom-4.jpg',
      alt: 'Bathroom view',
      category: 'interior',
    },
    {
      src: '/images/gallery/kids-room/kids-union-front.jpg',
      alt: 'Kids room',
      category: 'bedrooms',
    },
    {
      src: '/images/gallery/garden/garden-gate.jpg',
      alt: 'Garden gate',
      category: 'pool-views',
    },
    {
      src: '/images/gallery/interior/guest-toilets.jpg',
      alt: 'Guest toilets',
      category: 'interior',
    },
    {
      src: '/images/gallery/kids-room/kids-union-toys.jpg',
      alt: 'Kids room play area',
      category: 'bedrooms',
    },
    {
      src: '/images/gallery/garden/entrance-house-wode.jpg',
      alt: 'Garden entrance',
      category: 'exterior',
    },
    {
      src: '/images/gallery/interior/entrance-plant.jpg',
      alt: 'Entrance plant',
      category: 'interior',
    },
    {
      src: '/images/gallery/kids-room/kids-union-toys-2.jpg',
      alt: 'Kids room toys',
      category: 'bedrooms',
    },
    {
      src: '/images/gallery/kids-room/kids-seperate-window.jpg',
      alt: 'Kids separate room',
      category: 'bedrooms',
    },
    {
      src: '/images/gallery/kids-room/kids-seperate-closet.jpg',
      alt: 'Kids room closet',
      category: 'bedrooms',
    },
    {
      src: '/images/gallery/entrance/entrance-vertical.jpg',
      alt: 'Villa entrance',
      category: 'exterior',
    },
    {
      src: '/images/gallery/exterior/balcony-and-pool-side.jpg',
      alt: 'Pool side view',
      category: 'pool-views',
    },
    {
      src: '/images/gallery/interior/guest-toilets-2.jpg',
      alt: 'Guest toilets',
      category: 'interior',
    },
  ] as GalleryImage[],
};

export const TEST_ID = {
  GALLERY_SECTION: 'gallery-section',
  GALLERY_SUBTITLE: 'gallery-subtitle',
  GALLERY_FILTERS: 'gallery-filters',
  GALLERY_FILTER_BUTTON: 'gallery-filter-button',
  GALLERY_SCROLL: 'gallery-scroll',
  GALLERY_CARD: 'gallery-card',
  GALLERY_LIGHTBOX: 'gallery-lightbox',
  GALLERY_LIGHTBOX_IMAGE: 'gallery-lightbox-image',
  GALLERY_LIGHTBOX_CLOSE: 'gallery-lightbox-close',
  GALLERY_LIGHTBOX_PREV: 'gallery-lightbox-prev',
  GALLERY_LIGHTBOX_NEXT: 'gallery-lightbox-next',
  GALLERY_LIGHTBOX_COUNTER: 'gallery-lightbox-counter',
  GALLERY_SCROLL_LEFT: 'gallery-scroll-left',
  GALLERY_SCROLL_RIGHT: 'gallery-scroll-right',
};
