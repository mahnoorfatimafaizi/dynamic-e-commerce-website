"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "1",
    image: "/images/chair.png",
    title: "The Dandy chair",
    price: "£250",
  },
  {
    id: "2",
    image: "/images/vase-set.png",
    title: "Rustic Vase Set",
    price: "£155",
  },
  {
    id: "3",
    image: "/images/vase.png",
    title: "The Silky Vase",
    price: "£125",
  },
  {
    id: "4",
    image: "/images/lamp.png",
    title: "The Lucy Lamp",
    price: "£399",
  },
];

const NewCeramics = () => {
  return (
    <section className="py-16 px-5 mx-auto mt-16 mb-8 bg-gray-50 w-full max-w-[1440px]">
      <h2 className="text-3xl font-clash text-left mb-5">New ceramics</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-blue rounded-lg shadow-md overflow-hidden"
          >
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.image}
                alt={product.title}
                width={350}
                height={380}
                className="object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium text-lg mb-2 text-customPurple">
                  {product.title}
                </h3>
                <p className="text-customPurple">{product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link href="/pages/listing">
          <button className="px-6 py-2 text-customPurple bg-gray-100 rounded-lg hover:bg-customPurple hover:text-white">
            View collection
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NewCeramics;
