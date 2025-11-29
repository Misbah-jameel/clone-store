import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface Product {
  name: string;
  department: string;
  oldPrice: string;
  newPrice: string;
  imageUrl: string;
}

const products: Product[] = [
  { name: "Caramel Cone", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", imageUrl: "https://i.ibb.co/3R6Jx1b/haagen-dazs.png" },
  { name: "Green Apple", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", imageUrl: "https://i.ibb.co/7v2jz7f/green-apple.png" },
  { name: "Ham Slice", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", imageUrl: "https://i.ibb.co/7Y2nB8h/ham.png" },
  { name: "Caramel Cone", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", imageUrl: "https://i.ibb.co/3R6Jx1b/haagen-dazs.png" },
  { name: "Green Apple", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", imageUrl: "https://i.ibb.co/7v2jz7f/green-apple.png" },
  { name: "Ham Slice", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", imageUrl: "https://i.ibb.co/7Y2nB8h/ham.png" },
  { name: "Caramel Cone", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", imageUrl: "https://i.ibb.co/3R6Jx1b/haagen-dazs.png" },
  { name: "Green Apple", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", imageUrl: "https://i.ibb.co/7v2jz7f/green-apple.png" },
];

// Single Product Card
const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="bg-white text-center p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
    <img
      src={product.imageUrl}
      alt={product.name}
      className="w-full h-40 object-cover mb-4 rounded-md"
    />
    <h3 className="font-bold text-gray-800">{product.name}</h3>
    <p className="text-sm text-gray-500">{product.department}</p>
    <div className="flex justify-center items-center space-x-2 mt-2">
      <span className="text-gray-400 line-through">{product.oldPrice}</span>
      <span className="text-green-600 font-bold">{product.newPrice}</span>
    </div>
  </div>
);

// Products Section
const Products: React.FC = () => (
  <div className="lg:w-3/4">
    <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
      <div className="flex items-center space-x-2">
        <button className="px-4 py-2 text-sm font-bold text-blue-500 rounded-md">Men</button>
        <button className="px-4 py-2 text-sm font-bold text-gray-500 rounded-md">Women</button>
        <button className="px-4 py-2 text-sm font-bold text-gray-500 rounded-md">Accessories</button>
      </div>
      <div className="flex items-center ml-4">
        <button className="p-2 border border-gray-300 rounded-full">
          <ChevronLeftIcon className="h-5 w-5 text-gray-500" />
        </button>
        <button className="p-2 border border-gray-300 rounded-full ml-2">
          <ChevronRightIcon className="h-5 w-5 text-gray-500" />
        </button>
      </div>
    </div>

    <hr className="mb-8" />

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {products.map((product, idx) => (
        <ProductCard key={idx} product={product} />
      ))}
    </div>
  </div>
);

// Main Editors Pick Section
const DesktopProductSection: React.FC = () => (
    <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/4">
                <div className="flex flex-col">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                        BESTSELLER PRODUCTS
                    </h2>
                    <div className="flex flex-col">
                        <button className="px-4 py-2 text-sm font-bold text-blue-500 rounded-md">Men</button>
                        <button className="px-4 py-2 text-sm font-bold text-gray-500 rounded-md">Women</button>
                        <button className="px-4 py-2 text-sm font-bold text-gray-500 rounded-md">Accessories</button>
                    </div>
                </div>
            </div>
            <Products />
        </div>
  </section>
);

export default DesktopProductSection;
