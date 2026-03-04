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
    { id: 'exterior', label: 'Exterior' },
    { id: 'interior', label: 'Interior' },
    { id: 'bedrooms', label: 'Bedrooms' },
    { id: 'pool-views', label: 'Pool & Views' },
  ] as CategoryFilter[],
  IMAGES: [
    {
      src: '/images/gallery/exterior/exterior-1.jpg',
      alt: 'Villa exterior view',
      category: 'exterior',
      tall: true,
    },
    {
      src: '/images/gallery/exterior/garden-1.jpg',
      alt: 'Villa garden',
      category: 'exterior',
    },
    {
      src: '/images/gallery/exterior/exterior-2.jpg',
      alt: 'Villa exterior',
      category: 'exterior',
    },
    {
      src: '/images/gallery/exterior/outside-sofa.jpg',
      alt: 'Outdoor sofa area',
      category: 'exterior',
    },
    {
      src: '/images/gallery/exterior/outside-table.jpg',
      alt: 'Outdoor dining table',
      category: 'exterior',
    },
    {
      src: '/images/gallery/exterior/pool-side.jpg',
      alt: 'Pool side view',
      category: 'exterior',
    },
    {
      src: '/images/gallery/exterior/outside-towels.jpg',
      alt: 'Poolside towels',
      category: 'exterior',
    },
    {
      src: '/images/gallery/exterior/exterior-3.jpg',
      alt: 'Villa exterior angle',
      category: 'exterior',
    },
    {
      src: '/images/gallery/exterior/outside-sofa-far.jpg',
      alt: 'Outdoor living space',
      category: 'exterior',
    },
    {
      src: '/images/gallery/exterior/entrance-vertical.jpg',
      alt: 'Villa entrance',
      category: 'exterior',
    },
    {
      src: '/images/gallery/exterior/garden-vetical.jpg',
      alt: 'Garden vertical view',
      category: 'exterior',
    },
    {
      src: '/images/gallery/interior/living-room-sofa.jpg',
      alt: 'Living room sofa',
      category: 'interior',
      tall: true,
    },
    {
      src: '/images/gallery/interior/kitchen-1.jpg',
      alt: 'Modern kitchen',
      category: 'interior',
    },
    {
      src: '/images/gallery/interior/living-room-tv.jpg',
      alt: 'Living room TV area',
      category: 'interior',
    },
    {
      src: '/images/gallery/interior/interior-1.jpg',
      alt: 'Interior view',
      category: 'interior',
    },
    {
      src: '/images/gallery/interior/interior-2.jpg',
      alt: 'Interior detail',
      category: 'interior',
    },
    {
      src: '/images/gallery/interior/interior-3.jpg',
      alt: 'Interior space',
      category: 'interior',
    },
    {
      src: '/images/gallery/interior/entrance-plant.jpg',
      alt: 'Entrance plant',
      category: 'interior',
    },
    {
      src: '/images/gallery/master-bedroom/master-bedroom-bed.jpg',
      alt: 'Master bedroom',
      category: 'bedrooms',
      tall: true,
    },
    {
      src: '/images/gallery/master-bedroom/master-bedroom-closet.jpg',
      alt: 'Master bedroom closet',
      category: 'bedrooms',
    },
    {
      src: '/images/gallery/master-bedroom/master-bedroom-vibe.jpg',
      alt: 'Master bedroom ambiance',
      category: 'bedrooms',
    },
    {
      src: '/images/gallery/guests-bedroom/guests-bedroom-view.jpg',
      alt: 'Guest bedroom view',
      category: 'bedrooms',
    },
    {
      src: '/images/gallery/guests-bedroom/guests-bedroom-window.jpg',
      alt: 'Guest bedroom window',
      category: 'bedrooms',
    },
    {
      src: '/images/gallery/guests-bedroom/guests-bedroom-side.jpg',
      alt: 'Guest bedroom side',
      category: 'bedrooms',
    },
    {
      src: '/images/gallery/guests-bedroom/guests-bedroom-bathroom.jpg',
      alt: 'Guest bathroom',
      category: 'bedrooms',
    },
    {
      src: '/images/gallery/guests-bedroom/working-station.jpg',
      alt: 'Working station',
      category: 'bedrooms',
    },
    {
      src: '/images/gallery/bedrooms/bedroom-1.jpg',
      alt: 'Bedroom',
      category: 'bedrooms',
    },
    {
      src: '/images/gallery/bedrooms/bedroom-2.jpg',
      alt: 'Second bedroom',
      category: 'bedrooms',
    },
    {
      src: '/images/gallery/pool/pool-1.jpg',
      alt: 'Swimming pool',
      category: 'pool-views',
      tall: true,
    },
    {
      src: '/images/gallery/views/view-1.jpg',
      alt: 'Villa scenic view',
      category: 'pool-views',
    },
    {
      src: '/images/gallery/pool/pool-2.jpg',
      alt: 'Pool area',
      category: 'pool-views',
    },
    {
      src: '/images/gallery/pool/pool-3.jpg',
      alt: 'Pool view',
      category: 'pool-views',
    },
    {
      src: '/images/gallery/views/view-2.jpg',
      alt: 'Panoramic view',
      category: 'pool-views',
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
