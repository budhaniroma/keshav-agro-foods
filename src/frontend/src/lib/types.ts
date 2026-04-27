export interface Product {
  id: string;
  name: string;
  variant: string;
  description: string;
  longDescription: string;
  price: number;
  weight: string;
  image: string;
  benefits: string[];
  nutrition: NutritionFact[];
  badge?: string;
}

export interface NutritionFact {
  label: string;
  value: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  product: string;
  avatar: string;
}

export interface Benefit {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}
