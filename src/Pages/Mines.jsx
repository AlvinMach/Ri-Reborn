import React, { useEffect, useState } from 'react';
import productsData from '../products.json';

const Gemstones = () => {
  const [mines, setMines] = useState([]);

  useEffect(() => {
    setMines(productsData.mines);
  }, []);

  return (
    <>
    <h2 className = "max-w-[1640px] p-8 px-[90px] text-center text-3xl font-extrabold uppercase">Mine Claim Adverts</h2>
      <div className="max-w-[1640px] mx-auto container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-8">
      
            {mines.map((item) => (
              <div
                key={item.$id}
                className="bg-white shadow-lg flex flex-col space-y-4 hover:scale-105 duration-300 text-center max-h-[800px] max-w-full rounded-lg overflow-hidden relative p-6"
              >
                <h1 className="text-black font-semibold text-xl mb-4">
                  {item.title}
                </h1>
                <p className="text-sm mb-4">{item.description}</p>
              </div>
            ))
         
          }
        </div>
    </>
  );
};

export default Gemstones;
