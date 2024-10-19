import React, { useEffect, useState } from 'react';
import productsData from '../products.json';

const Gemstones = () => {
  const [ppe, setPpe] = useState([]);

  useEffect(() => {
    setPpe(productsData.protectiveWear);
  }, []);

  return (
    <>
      <h2 className="p-8 px-[90px] text-center text-3xl font-extrabold uppercase">
        Protective Wear Clothing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-[80px] m-11 py-4">
        {ppe.map((product) => (
          <div
            key={product.id}
            className="product-item hover:scale-105 duration-300 transform transition-all shadow-lg border rounded-lg overflow-hidden"
          >
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.title || 'Product Image'}
                className="w-full h-[300px] object-cover transform transition-transform hover:scale-110"
              />
            </div>
            <div className="p-4">
              <p className="text-lg font-semibold text-gray-800">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gemstones;
