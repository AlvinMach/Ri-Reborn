import React from "react";
import { Link } from "react-router-dom";

const Products = ({ item }) => {
  return (
    <Link to={`/products/${item.id}`}>
      <div className="hover:scale-105 duration-300 text-center max-h-[450px] max-w-full rounded-lg overflow-hidden relative p-8">
        <div>
          <img 
            src={item.image} 
            alt={item.title} 
            className="h-64 w-full object-cover rounded-lg" 
          />
        </div>
        <h1 className="mt-2 text-xl font-custom font-semibold mb-11">{item.title}</h1>
      </div>
    </Link>
  );
};

export default Products;
