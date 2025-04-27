export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  image: string;
  imageHover?: string;
  images?: string[];
  category: string;
  tags: string[];
  isNew: boolean;
  isFeatured: boolean;
  rating: number;
  reviewCount: number;
  stock: number;
  sizes?: string[];
  colors?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  text: string;
  rating: number;
  avatarUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}