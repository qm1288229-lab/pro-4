import bedProductImage from '../assets/bestseller-bed.jpg'
import chairCollectionImage from '../assets/collection-chair.jpg'
import diningCollectionImage from '../assets/collection-table.jpg'
import tableCollectionImage from '../assets/collection-desk.jpg'
import comfortBannerImage from '../assets/promo-comfort.jpg'
import shippingBannerImage from '../assets/promo-shipping.jpg'
import heroImage from '../assets/hero-chair.jpg'
import summerBannerImage from '../assets/hero.jpg'
import sarahImage from '../assets/testimonial-sarah.jpg'
import jamesImage from '../assets/testimonial-james.jpg'
import emilyImage from '../assets/testimonial-emily.jpg'

export {
  bedProductImage,
  comfortBannerImage,
  diningCollectionImage,
  heroImage,
  shippingBannerImage,
  summerBannerImage,
  tableCollectionImage,
}

export const navItems = ['Home', 'Shop', 'Products', 'Blog', 'Pages']

export const shopMenuGroups = [
  {
    title: 'Layout',
    links: [
      'Filter Sidebar',
      'Filter Top',
      'Filter Drawer',
      'Without Filter',
      'Collection - 2 columns',
      'Collection - 3 columns',
      'Collection - 4 columns',
    ],
  },
  {
    title: 'Features',
    links: [
      'Banner Image',
      'Banner No Image',
      'Banner Split',
      'Collection list',
      'Sub Collection',
      'Pagination',
      'Infinity',
      'Load More',
    ],
  },
  {
    title: 'Hover Style',
    links: Array.from({ length: 8 }, (_, index) => `Hover Style ${index + 1}`),
  },
]

export const shopMenuCollections = [
  { name: 'Office & Workspace', count: '8 products', image: tableCollectionImage },
  { name: 'Modern Bedroom Furniture', count: '8 products', image: bedProductImage },
]

export const collections = [
  { name: 'Coffee Tables', image: tableCollectionImage },
  { name: 'Dining Chairs', image: chairCollectionImage },
  { name: 'Lounge Chairs', image: heroImage },
  { name: 'Dining Tables', image: diningCollectionImage },
]

export const bestSellers = [
  { name: 'Fabric Accent Chair', price: '$20.00', image: heroImage },
  { name: 'Glass Top Center Table', price: '$15.00', image: diningCollectionImage },
  { name: 'Outdoor Patio Set (4-Piece)', price: '$25.00', image: chairCollectionImage },
  { name: 'Luxury King Bed Frame', price: '$25.00', image: bedProductImage, sale: true },
  { name: 'Space-Saving Wall Desk', price: '$15.00', image: tableCollectionImage },
]

export const testimonials = [
  {
    title: 'Truly Impressed With The Quality',
    review: 'Every piece feels custom-made. The craftsmanship is exceptional and the comfort is unmatched.',
    name: 'Sarah Mitchell',
    role: 'Interior Designer',
    image: sarahImage,
  },
  {
    title: 'Seamless Shopping Experience',
    review: 'From browsing to delivery, everything was smooth and professional. The sofa looks amazing in our living room.',
    name: 'James Carter',
    role: 'Homeowner',
    image: jamesImage,
  },
  {
    title: 'Stylish & Sustainable Space Beautifully',
    review: 'Love that I can decorate my space beautifully without compromising on sustainability. Our furniture feels right at home.',
    name: 'Emily Zhao',
    role: 'Eco-conscious Blogger',
    image: emilyImage,
  },
]

export const journalPosts = [
  {
    date: 'May 06 2025',
    title: 'How to Choose the Perfect Sofa for Your Living Room',
    image: comfortBannerImage,
    alt: 'Warm, modern living room with comfortable seating',
  },
  {
    date: 'Feb 02 2025',
    title: 'Trendy Furniture Colors to Transform Your Space in 2025',
    image: shippingBannerImage,
    alt: 'Contemporary furniture and dining area',
  },
  {
    date: 'May 06 2025',
    title: 'Top 10 Must-Have Furniture Pieces for a Modern Home',
    image: heroImage,
    alt: 'Modern accent chair',
  },
  {
    date: 'Feb 02 2025',
    title: 'Wood vs. Metal: Which Furniture Material is Best?',
    image: bedProductImage,
    alt: 'A furnished bedroom with a wooden bed frame',
  },
]

export const trustMarks = [
  { title: 'Quality Guaranteed', detail: 'Crafted to last', shape: 'rounded-sm' },
  { title: 'Crafted With Care', detail: 'Furniture & design', shape: 'rounded-[50%]' },
  { title: 'Premium Materials', detail: 'A better standard', shape: 'rounded-full' },
  { title: 'Style & Comfort', detail: 'Thoughtful details', shape: 'rounded-sm' },
  { title: 'Quality Guaranteed', detail: 'Crafted to last', shape: 'rounded-sm' },
  { title: 'Crafted With Care', detail: 'Furniture & design', shape: 'rounded-[50%]' },
]
