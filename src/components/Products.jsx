import React from "react";
import { Link } from "react-router-dom";

const Products = ({ item }) => {
  return (
    <div className="relative text-center max-h-[800px] max-w-full rounded-sm overflow-hidden p-6">
      <div className="relative overflow-hidden flex">
        <img
          src={item.image}
          alt={item.name}
          className="w-[400px] h-[300px] object-cover transition-transform duration-300 hover:scale-105 z-0"
        />

      
        <div className="absolute bottom-[5px] left-[10px] bg-black/50 right-[100px]  bg-opacity-50 ">
          <h3 className="text-white text-center font-bold text-lg">{item.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Products;
