import { Product, Category, Testimonial, TeamMember } from '@/lib/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Floral Summer Dress',
    description: 'A beautiful floral dress perfect for summer days.',
    price: 89.99,
    discount: 15,
    image: 'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageHover: 'https://images.pexels.com/photos/7287562/pexels-photo-7287562.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Dresses',
    tags: ['summer', 'floral', 'dress'],
    isNew: true,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 124,
    stock: 25,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Pink', 'Blue', 'White']
  },
  {
    id: '2',
    name: 'Classic Leather Handbag',
    description: 'A timeless leather handbag that complements any outfit.',
    price: 159.99,
    discount: 0,
    image: 'https://images.pexels.com/photos/5234150/pexels-photo-5234150.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Accessories',
    tags: ['handbag', 'leather', 'classic'],
    isNew: false,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 89,
    stock: 12,
    colors: ['Black', 'Brown', 'Tan']
  },
  {
    id: '3',
    name: 'Gold Hoop Earrings',
    description: 'Elegant gold hoop earrings to elevate your look.',
    price: 49.99,
    discount: 10,
    image: 'https://images.pexels.com/photos/10248254/pexels-photo-10248254.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Jewelry',
    tags: ['earrings', 'gold', 'accessories'],
    isNew: true,
    isFeatured: true,
    rating: 4.7,
    reviewCount: 56,
    stock: 30
  },
  {
    id: '4',
    name: 'Silk Pajama Set',
    description: 'Luxurious silk pajama set for the ultimate comfort.',
    price: 129.99,
    discount: 0,
    image: 'https://images.pexels.com/photos/6311619/pexels-photo-6311619.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Sleepwear',
    tags: ['pajama', 'silk', 'sleepwear'],
    isNew: false,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 42,
    stock: 8,
    sizes: ['S', 'M', 'L'],
    colors: ['Lavender', 'Sage', 'Ivory']
  },
  {
    id: '5',
    name: 'Strappy Heeled Sandals',
    description: 'Elegant strappy sandals with a comfortable heel height.',
    price: 79.99,
    discount: 20,
    image: 'https://images.pexels.com/photos/4937223/pexels-photo-4937223.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Shoes',
    tags: ['shoes', 'heels', 'sandals'],
    isNew: true,
    isFeatured: true,
    rating: 4.6,
    reviewCount: 67,
    stock: 15,
    sizes: ['36', '37', '38', '39', '40', '41'],
    colors: ['Black', 'Nude', 'Silver']
  },
  {
    id: '6',
    name: 'Linen Blouse',
    description: 'Breezy linen blouse for effortless style.',
    price: 69.99,
    discount: 0,
    image: 'https://images.pexels.com/photos/10155098/pexels-photo-10155098.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Tops',
    tags: ['tops', 'linen', 'blouse'],
    isNew: false,
    isFeatured: true,
    rating: 4.7,
    reviewCount: 83,
    stock: 22,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Beige', 'Light Blue']
  },
  {
    id: '7',
    name: 'Cashmere Throw Blanket',
    description: 'Luxuriously soft cashmere throw for cozy comfort.',
    price: 149.99,
    discount: 0,
    image: 'https://images.pexels.com/photos/6604313/pexels-photo-6604313.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Home',
    tags: ['home', 'blanket', 'cashmere'],
    isNew: false,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 37,
    stock: 9,
    colors: ['Cream', 'Gray', 'Dusty Rose']
  },
  {
    id: '8',
    name: 'Wide-Leg Linen Pants',
    description: 'Comfortable and stylish wide-leg linen pants.',
    price: 89.99,
    discount: 10,
    image: 'https://images.pexels.com/photos/7691193/pexels-photo-7691193.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Pants',
    tags: ['pants', 'linen', 'wide-leg'],
    isNew: true,
    isFeatured: true,
    rating: 4.5,
    reviewCount: 52,
    stock: 18,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Beige', 'Black', 'Olive']
  }
];

export const categories: Category[] = [
  {
    id: '1',
    name: 'Clothing',
    slug: 'clothing',
    description: 'Dresses, tops, and more',
    image: 'https://images.pexels.com/photos/5868720/pexels-photo-5868720.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 145
  },
  {
    id: '2',
    name: 'Accessories',
    slug: 'accessories',
    description: 'Bags, jewelry, and more',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 98
  },
  {
    id: '3',
    name: 'Beauty',
    slug: 'beauty',
    description: 'Skincare, makeup, and more',
    image: 'https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 72
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Regular Customer',
    text: 'I absolutely love the quality of Blossom\'s products! The attention to detail and craftsmanship is evident in every piece I\'ve purchased.',
    rating: 5,
    avatarUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    name: 'Michael Chen',
    title: 'First-time Buyer',
    text: 'The customer service at Blossom is exceptional. They went above and beyond to help me find the perfect gift for my wife\'s birthday.',
    rating: 5,
    avatarUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    title: 'Loyal Member',
    text: 'Blossom\'s commitment to sustainability is what keeps me coming back. It feels good to support a brand that cares about the planet.',
    rating: 4,
    avatarUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Emily Chen',
    role: 'Founder & CEO',
    bio: 'Fashion industry veteran with a passion for sustainable design.',
    image: 'https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    name: 'David Miller',
    role: 'Creative Director',
    bio: 'Award-winning designer who brings our vision to life.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    name: 'Sophia James',
    role: 'Head of Operations',
    bio: 'Ensures everything runs smoothly from production to delivery.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    name: 'Marcus Johnson',
    role: 'Customer Experience',
    bio: 'Dedicated to creating exceptional shopping experiences.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];