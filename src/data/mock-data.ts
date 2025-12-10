// CarouselGrid
export interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  discount?: number;
  category: string;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
}
// brown by categories 
export const categories: Category[] = [
  { id: 1, name: 'Phones', icon: '📱' },
  { id: 2, name: 'Computers', icon: '💻' },
  { id: 3, name: 'SmartWatch', icon: '⌚' },
  { id: 4, name: 'Camera', icon: '📷' },
  { id: 5, name: 'Headphones', icon: '🎧' },
  { id: 6, name: 'Gaming', icon: '🎮' },
];
// Explore Our Products and best sells
export const flashSalesProducts: Product[] = [
  {
    id: 1,
    title: 'Wireless Headphones Pro',
    price: 89,
    originalPrice: 159,
    image: '/wireless-headphones.png',
    rating: 4.5,
    reviews: 128,
    discount: 44,
    category: 'Headphones',
  },
  {
    id: 2,
    title: 'Smart Watch Series 5',
    price: 199,
    originalPrice: 399,
    image: '/watch.png',
    rating: 4.8,
    reviews: 256,
    discount: 50,
    category: 'SmartWatch',
  },
  {
    id: 3,
    title: 'Portable Gaming Console',
    price: 149,
    originalPrice: 299,
    image: '/modern-gaming-console.png',
    rating: 4.3,
    reviews: 89,
    discount: 50,
    category: 'Gaming',
  },
  {
    id: 4,
    title: '4K Camera',
    price: 379,
    originalPrice: 799,
    image: '/4k-camera.jpg',
    rating: 4.7,
    reviews: 203,
    discount: 53,
    category: 'Camera',
  },
  {
    id: 5,
    title: 'USB-C Hub Pro',
    price: 45,
    originalPrice: 89,
    image: '/usb-hub.jpg',
    rating: 4.2,
    reviews: 67,
    discount: 49,
    category: 'Computers',
  },
  {
    id: 6,
    title: 'Mechanical Keyboard RGB',
    price: 129,
    originalPrice: 249,
    image: '/mechanical-keyboard.png',
    rating: 4.6,
    reviews: 145,
    discount: 48,
    category: 'Computers',
  },
  {
    id: 7,
    title: 'Wireless Mouse Pro',
    price: 59,
    originalPrice: 99,
    image: '/wireless-mouse.png',
    rating: 4.4,
    reviews: 112,
    discount: 40,
    category: 'Computers',
  },
  {
    id: 8,
    title: 'Phone Stand Adjustable',
    price: 29,
    originalPrice: 49,
    image: '/phone-stand.jpg',
    rating: 4.1,
    reviews: 54,
    discount: 41,
    category: 'Phones',
  },
];

export const bestSellingProducts: Product[] = [
  {
    id: 101,
    title: 'Premium Bluetooth Speaker',
    price: 119,
    image: '/bluetooth-speaker.jpg',
    rating: 4.6,
    reviews: 198,
    category: 'Headphones',
  },
  {
    id: 102,
    title: 'Wireless Charging Pad',
    price: 39,
    image: '/wireless-charging-pad.png',
    rating: 4.4,
    reviews: 87,
    category: 'Phones',
  },
  {
    id: 103,
    title: 'Laptop Stand Aluminum',
    price: 49,
    image: '/laptop-stand.png',
    rating: 4.7,
    reviews: 142,
    category: 'Computers',
  },
  {
    id: 104,
    title: 'USB Flash Drive 1TB',
    price: 79,
    image: '/usb-flash-drive.jpg',
    rating: 4.5,
    reviews: 201,
    category: 'Computers',
  },
  {
    id: 105,
    title: 'Portable SSD 2TB',
    price: 189,
    image: '/portable-ssd.jpg',
    rating: 4.8,
    reviews: 276,
    category: 'Computers',
  },
  {
    id: 106,
    title: 'Gaming Mouse RGB',
    price: 69,
    image: '/gaming-mouse.png',
    rating: 4.5,
    reviews: 164,
    category: 'Gaming',
  },
  {
    id: 107,
    title: 'HD Webcam 1080p',
    price: 79,
    image: '/hd-webcam.jpg',
    rating: 4.6,
    reviews: 134,
    category: 'Computers',
  },
  {
    id: 108,
    title: 'Phone Case Premium',
    price: 34,
    image: '/phone-case.png',
    rating: 4.3,
    reviews: 98,
    category: 'Phones',
  },
  {
    id: 109,
    title: 'Cable Management Kit',
    price: 24,
    image: '/cable-organizer.jpg',
    rating: 4.4,
    reviews: 156,
    category: 'Computers',
  },
  {
    id: 110,
    title: 'Screen Protector Glass',
    price: 19,
    image: '/screen-protector.png',
    rating: 4.7,
    reviews: 203,
    category: 'Phones',
  },
];

export const newArrivalsProducts: Product[] = [
  {
    id: 201,
    title: 'PS5 Gaming Console',
    price: 499,
    image: '/ps5-gaming-console.jpg',
    rating: 4.9,
    reviews: 512,
    category: 'Gaming',
  },
  {
    id: 202,
    title: 'Premium Fragrance Collection',
    price: 189,
    image: '/premium-fragrance-perfume-bottle.jpg',
    rating: 4.8,
    reviews: 289,
    category: 'Phones',
  },
  {
    id: 203,
    title: 'Ultra HD 4K Projector',
    price: 649,
    image: '/4k-projector.jpg',
    rating: 4.9,
    reviews: 178,
    category: 'Camera',
  },
  {
    id: 204,
    title: 'AI Smart Speaker Pro',
    price: 299,
    image: '/smart-speaker.jpg',
    rating: 4.7,
    reviews: 324,
    category: 'Headphones',
  },
  {
    id: 205,
    title: 'Foldable Phone 2024',
    price: 1199,
    image: '/foldable-phone.jpg',
    rating: 4.8,
    reviews: 456,
    category: 'Phones',
  },
  {
    id: 206,
    title: 'VR Headset Pro Max',
    price: 899,
    image: '/vr-headset.jpg',
    rating: 4.6,
    reviews: 267,
    category: 'Gaming',
  },
  {
    id: 207,
    title: 'Drone 4K Camera',
    price: 799,
    image: '/drone-4k.jpg',
    rating: 4.8,
    reviews: 389,
    category: 'Camera',
  },
  {
    id: 208,
    title: 'Gaming Laptop RTX 4090',
    price: 2499,
    image: '/gaming-laptop.jpg',
    rating: 4.9,
    reviews: 512,
    category: 'Computers',
  },
];

export const PRODUCTS: Product[] = [
  ...flashSalesProducts,
  ...bestSellingProducts,
  ...newArrivalsProducts,
];

export const CATEGORIES = categories;
