import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams(); 
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch('/products.json'); 
        if (!res.ok) throw new Error('Failed to fetch products');

        const data = await res.json();
       
        const products = data.products || []; 

       
        const product = products.find(item => item.id === id); 
        setItem(product);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!item) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-[1640px] max-h-[1640px] mx-auto container px-4 md:px-6 lg:px-[100px] py-11 mt-6">
      <div className="grid grid-cols-2 gap-11">
        <div className="max-h-[500px]"> 
          <img src={item.image} alt={item.title} className="h-[400px] w-full object-contain rounded-lg" />  
        </div>
        <div className="py-11 mt-11 border-b-4 ml-11 flex flex-col space-y-6">
          <h2 className="text-5xl font-custom">{item.title}</h2>
          <p className = "font-serif">{item.description}</p>
         
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
