export default interface Product {
  id: number;
  name: string;
  price: number;
  discount?: number;
  description: string;
  category: string;
  brand: string;
  image: string;           
  images?: string[];       
  quantity: number;
  rating?: number;
}
export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 1299,
    discount: 10,
    description: "Apple's latest flagship phone with A17 Pro chip and titanium build.",
    category: "Electronics",
    brand: "Apple",
    image: "/images/categories/laptop.png",
    images: [
      "/images/iphone15-front.jpg",
      "/images/iphone15-back.jpg",
      "/images/iphone15-side.jpg"
    ],
    quantity: 15,
    rating: 4.8
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    price: 1199,
    description: "High-end Android phone with a 200MP camera and S Pen support.",
    category: "Electronics",
    brand: "Samsung",
    image: "/images/categories/laptop.png",
    quantity: 20,
    rating: 4.7
  }, 
  {
    id: 3,
    name: "Nike Air Max 270",
    price: 150,
    discount: 5,
    description: "Lightweight sneakers with a big Air unit for all-day comfort.",
    category: "Footwear",
    brand: "Nike",
    image: "/images/categories/laptop.png",
    quantity: 50,
    rating: 4.6
  },
];
