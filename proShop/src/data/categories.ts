export default interface Category {
  id: number;
  name: string;
  description?: string;
  image?: string;
}

export const categories: Category[] = [
  { id: 1, name: "Laptop", image: "/images/categories/laptop.png" },
  { id: 2, name: "Computer Components", image: "/images/categories/computer-components.png" },
  { id: 3, name: "Devices", image: "/images/categories/devices.png" },
  { id: 4, name: "Accessories", image: "/images/categories/accessories.png" },
];
