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

  {
    id: "5",
  image: "/images/sofa.jpg",
  title: "The Poplan suede sofa",
  price: "£980",

},
{
    id: "6",
  image: "/images/chair.png",
  title: "The Dandy chair",
  price: "£250",

},
{
    id: "7",
  image: "/images/chair3.png",
  title: "The Luxe chair",
  price: "£300",
},
{
  id: "8",
  image: "/images/chair.png",
  title: "The Dandy chair",
  price: "£250",
},
{
  id: "9",
  image: "/images/vase-set.png",
  title: "Rustic Vase Set",
  price: "£155",
},
{
  id: "10",
  image: "/images/vase.png",
  title: "The Silky Vase",
  price: "£125",
},
{
  id: "11",
  image: "/images/lamp.png",
  title: "The Lucy Lamp",
  price: "£399",
 
},

{
  id: "12",
image: "/images/sofa.jpg",
title: "The Poplan suede sofa",
price: "£980",

},
{
  id: "13",
image: "/images/chair.png",
title: "The Dandy chair",
price: "£250",

},
{
  id: "14",
image: "/images/chair3.png",
title: "The Luxe chair",
price: "£300",

},
{
  id: "15",
  image: "/images/lamp.png",
  title: "The Lucy Lamp",
  price: "£399",
},

{
  id: "16",
image: "/images/sofa.jpg",
title: "The Poplan suede sofa",
price: "£980",

},
];

const AllProductsPage = () => {
  return (
    <div>
      <div className="relative w-full h-[100px] md:h-[150px] mb-5">
        <Image
          src="/images/banner.png"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />
      </div>
      <div className="space-y-16 px-4 sm:px-8 lg:px-16 mb-8">
        <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center border-b pb-4 space-y-4 sm:space-y-0">
          <div className="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <select className="border p-2 rounded-lg w-full sm:w-auto">
              <option>Category</option>
            </select>
            <select className="border p-2 rounded-lg w-full sm:w-auto">
              <option>Product type</option>
            </select>
            <select className="border p-2 rounded-lg w-full sm:w-auto">
              <option>Price</option>
            </select>
            <select className="border p-2 rounded-lg w-full sm:w-auto">
              <option>Brand</option>
            </select>
          </div>

          <div className="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <select className="border p-2 rounded-lg w-full sm:w-auto">
              <option>Sorting by</option>
            </select>
            <select className="border p-2 rounded-lg w-full sm:w-auto">
              <option>Date added</option>
            </select>
          </div>
        </div>

        
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
            <div
              key={product.id} className="space-y-4 text-center">
                 <Link href={`/products/${product.id}`}>
              <div className="relative w-full h-80">
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  className="object-cover"
                />
              </div>
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-700">{product.price}</p>
              </Link>
              
              <Link href={`/products/${product.id}`}>
                <button className="px-4 py-2 bg-customPurple text-white rounded-lg hover:bg-customPurple/80">
                  View Product
                </button>
              </Link>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default AllProductsPage;
