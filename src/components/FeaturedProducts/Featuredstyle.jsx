import React from "react";
import { Link } from "react-router-dom";

const Products = ({ item }) => {
  return (
    <div className="relative text-center w-full sm:w-[90%] md:max-w-[500px] lg:max-w-[800px] mx-auto bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 my-6">
      
      {/* Product Image Section */}
      <Link to= "" className="text-blue-600">
        <div className="relative overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-[300px] object-cover transition-transform duration-300"
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-25 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-bold text-lg">New Products</span>
          </div>
        </div>
      </Link>

      {/* Title Section */}
      <h3 className="mt-4 text-lg text-gray-800 font-semibold">{item.title}</h3>

      <div className="flex justify-between items-center px-4 py-2">
        {/* Additional product details can go here */}
      </div>
    </div>
  );
};

export default Products;
