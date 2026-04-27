import type { Benefit, NavLink, Product, Testimonial } from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Health Benefits", href: "/health-benefits" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Contact", href: "/contact" },
];

export const PRODUCTS: Product[] = [
  {
    id: "soya-milk",
    name: "Soya Milk",
    variant: "Classic Unsweetened",
    description:
      "Creamy, dairy-free soya milk crafted from premium non-GMO soybeans with no added preservatives.",
    longDescription:
      "Our Soya Milk is made from 100% non-GMO soybeans, cold-pressed to retain maximum nutrition. Free from lactose, cholesterol, and artificial additives — perfect for daily consumption, cooking, or blending into your favourite smoothie.",
    price: 180,
    weight: "1L",
    image: "/assets/generated/product-soya-milk.dim_600x600.jpg",
    badge: "Best Seller",
    benefits: [
      "High protein (8g/serving)",
      "Lactose-free",
      "Cholesterol-free",
      "Rich in calcium",
    ],
    nutrition: [
      { label: "Protein", value: "8g" },
      { label: "Calories", value: "80 kcal" },
      { label: "Fat", value: "4g" },
      { label: "Carbs", value: "4g" },
    ],
  },
  {
    id: "tofu",
    name: "Tofu",
    variant: "Silken Organic",
    description:
      "Smooth, versatile silken tofu made from organically grown soybeans — ideal for cooking and health-conscious meals.",
    longDescription:
      "Our Silken Organic Tofu is handcrafted using traditional methods from certified organic soybeans. Its delicate texture makes it perfect for stir-fries, salads, soups, or enjoyed fresh with a sprinkle of seasoning.",
    price: 150,
    weight: "300g",
    image: "/assets/generated/product-tofu.dim_600x600.jpg",
    benefits: [
      "Complete plant protein",
      "Low calorie",
      "Calcium-rich",
      "Versatile ingredient",
    ],
    nutrition: [
      { label: "Protein", value: "10g" },
      { label: "Calories", value: "70 kcal" },
      { label: "Fat", value: "3.5g" },
      { label: "Carbs", value: "2g" },
    ],
  },
  {
    id: "soya-shrikhand",
    name: "Soya Shrikhand",
    variant: "Mango Saffron",
    description:
      "A luxurious Indian dessert reimagined — Soya Shrikhand with real mango pulp, saffron, and zero dairy.",
    longDescription:
      "Our Soya Shrikhand brings the beloved Indian mithai into the plant-based era. Made from strained soya yoghurt, blended with Alphonso mango pulp and pure Kashmiri saffron, this indulgent treat is completely vegan and high in protein.",
    price: 210,
    weight: "250g",
    image: "/assets/generated/product-soya-shrikhand.dim_600x600.jpg",
    badge: "New",
    benefits: [
      "Probiotic-rich",
      "High protein dessert",
      "No added preservatives",
      "Vegan-friendly",
    ],
    nutrition: [
      { label: "Protein", value: "6g" },
      { label: "Calories", value: "120 kcal" },
      { label: "Fat", value: "2g" },
      { label: "Carbs", value: "18g" },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "Keshav Agro's Soya Milk has completely replaced dairy in our home. The taste is clean, fresh, and incredibly creamy. My kids love it!",
    product: "Soya Milk",
    avatar: "PS",
  },
  {
    id: "2",
    name: "Arjun Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    text: "As a fitness trainer, I recommend Keshav Tofu to all my clients. The protein quality is excellent and the texture holds up perfectly when cooked.",
    product: "Silken Tofu",
    avatar: "AP",
  },
  {
    id: "3",
    name: "Meera Iyer",
    location: "Bangalore, Karnataka",
    rating: 5,
    text: "The Mango Saffron Shrikhand is absolutely divine! I can't believe it's dairy-free. The saffron aroma and mango flavour are spot on.",
    product: "Soya Shrikhand",
    avatar: "MI",
  },
  {
    id: "4",
    name: "Rajan Mehta",
    location: "Pune, Maharashtra",
    rating: 5,
    text: "Finally a soy brand that doesn't compromise on quality. The packaging is thoughtful and the products arrive fresh every time.",
    product: "Soya Milk",
    avatar: "RM",
  },
  {
    id: "5",
    name: "Sunita Verma",
    location: "Jaipur, Rajasthan",
    rating: 5,
    text: "I've been lactose intolerant my whole life and Keshav Agro has truly changed my relationship with food. Pure, natural, trustworthy.",
    product: "Silken Tofu",
    avatar: "SV",
  },
  {
    id: "6",
    name: "Aditya Kulkarni",
    location: "Nashik, Maharashtra",
    rating: 5,
    text: "Tried the entire range and every single product exceeded my expectations. This is what plant-based food should taste like.",
    product: "Full Range",
    avatar: "AK",
  },
];

export const BENEFITS: Benefit[] = [
  {
    id: "protein",
    icon: "💪",
    title: "100% Plant Protein",
    description:
      "Complete amino acid profile from premium soybeans — nature's most powerful plant protein source.",
  },
  {
    id: "natural",
    icon: "🌿",
    title: "All Natural Ingredients",
    description:
      "No preservatives, no artificial colours. Every ingredient you can pronounce and trust.",
  },
  {
    id: "eco",
    icon: "♻️",
    title: "Eco-Conscious & Sustainable",
    description:
      "Responsibly sourced, minimal packaging, low carbon footprint — better for you, better for the planet.",
  },
  {
    id: "lactose",
    icon: "🥛",
    title: "Lactose-Free",
    description:
      "Enjoy dairy-like richness without discomfort. Perfect for the lactose intolerant and vegan community.",
  },
  {
    id: "quality",
    icon: "✅",
    title: "Quality Assured",
    description:
      "Every batch is tested for purity and nutritional integrity before it reaches your table.",
  },
  {
    id: "india",
    icon: "🇮🇳",
    title: "Made in India",
    description:
      "Proudly crafted in India using locally sourced soybeans, supporting our farming communities.",
  },
];
