
import React, { useEffect, useState } from 'react';
import productsData from '../products.json';

const Gemstones = () => {
  const [gemstones, setGemstones] = useState([]);

  useEffect(() => {
    setGemstones(productsData.gemstones);
  }, []);

  return (
    <>
      <h2 className = "max-w-[1640px] p-8 px-[90px] text-center text-3xl font-extrabold uppercase">Gemstones</h2>
    <div className="md:grid md:grid-cols-3 flex flex-col space-y-8 gap-8 px-[80px] m-11 py-4">
      {gemstones.map(product => (
        <div key={product.id} className=" px-8product-item hover:scale-105 duration-300 ">
          <img src = {product.image} className = "w-[300px] h-[300px]" />
        </div>
      ))}
    </div>
    </>
  );
};

export default Gemstones;
