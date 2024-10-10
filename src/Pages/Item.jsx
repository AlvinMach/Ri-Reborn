import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams(); 
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:8000/products/${id}`);
        const data = await res.json();
        setItem(data);
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
    <div className=" max-w-[1640px] max-h-[1640px] mx-auto container px-4  md:px-6 lg:px-[100px] py-11 mt-6" >
        <div className = "grid grid-cols-2 gap-11 ">
            <div className = "max-h-[50px]">
              <img src = {item.image} className = "  h-[500px] w-full object-contain  rounded-lg" />  
            </div>
           <div className = "py-11 mt-11 border-b-4  ml-11 flex flex-col space-y-6">
           <h2 className = "text-5xl font-custom">{item.title}</h2>
           
           </div>
        </div>
    </div>
  );
};

export default ProductDetails;