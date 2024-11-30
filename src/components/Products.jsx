import React from "react";

const Products = ({ item }) => {
  return (
    <div className="relative text-center w-full max-w-full rounded-sm overflow-hidden p-4 sm:p-6">
      <div className="relative overflow-hidden flex flex-col sm:flex-row">
        <img
          src={item.image}
          alt={item.name}
          className="w-full sm:w-[400px] h-[200px] sm:h-[300px] rounded-lg object-cover transition-transform duration-300 hover:scale-105 z-0"
        />
        <div className="absolute bottom-2 left-2 sm:left-[10px] right-2 sm:right-[100px] bg-black bg-opacity-50 p-2 sm:p-4 rounded-lg">
          <h3 className="text-white text-center font-bold text-sm sm:text-lg">
            {item.name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Products;
