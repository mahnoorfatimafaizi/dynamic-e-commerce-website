"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

import BrandFeatures from "@/components/BrandFeatures";
import NewCeramics from "@/components/NweCeramics";

// Mock data
const products = [
  {
    id: "1",
    image: "/images/chair.png",
    title: "The Dandy chair",
    price: "£250",
    description: "A stylish and comfortable chair for any living space.",
    features: ["Warm light", "Modern design", "Durable build"],
    dimensions: { height: "60cm", width: "30cm", depth: "30cm" },
  },
  {
    id: "2",
    image: "/images/vase-set.png",
    title: "Rustic Vase Set",
    price: "£155",
    description: "A beautiful set of rustic vases to elevate your decor.",
    features: ["Warm light", "Modern design", "Durable build"],
    dimensions: { height: "60cm", width: "30cm", depth: "30cm" },
  },
  // More products...
];

const ProductPage = () => {
  const params = useParams(); // Use useParams() to access the params object.
  const id = params?.id;

  // Find product by id
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-gray-700">Product Not Found</h1>
        <p>The product you&apos;re looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="px-8 py-12">
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-12">
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          className="rounded-lg"
        />

        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg text-gray-700 mb-6">{product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          <h2 className="text-lg font-semibold mb-2">Features:</h2>
          <ul className="list-disc pl-5 mb-6">
            {product.features.map((feature, index) => (
              <li key={index} className="text-gray-600">
                {feature}
              </li>
            ))}
          </ul>

          <h2 className="text-lg font-semibold mb-2">Dimensions:</h2>
          <div className="space-y-2">
            <p>
              <span className="font-medium">Height:</span> {product.dimensions.height}
            </p>
            <p>
              <span className="font-medium">Width:</span> {product.dimensions.width}
            </p>
            <p>
              <span className="font-medium">Depth:</span> {product.dimensions.depth}
            </p>
          </div>
          <div className="mt-8">
            <div className="flex items-center space-x-4">
              <label htmlFor="amount" className="text-gray-700">
                Quantity
              </label>
              <input
                id="amount"
                type="number"
                className="border border-gray-300 rounded-lg px-4 py-2 w-16 text-center"
                defaultValue={1}
              />
            </div>

            <button className="mt-4 px-8 py-3 bg-customPurple text-white rounded-lg hover:bg-purple-700">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <NewCeramics />
      <BrandFeatures />
    </div>
  );
};

export default ProductPage;



