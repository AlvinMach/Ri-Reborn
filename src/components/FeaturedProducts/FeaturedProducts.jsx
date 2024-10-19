import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import productsData from '../../products.json';
import Featuredstyle from "./Featuredstyle";

const FeaturedProducts = () => {
  const [trending, setTrending] = useState([]);
  const navigate = useNavigate(); // Create navigate function for navigation

  useEffect(() => {
    const filteredTrending = productsData.protectiveWear.filter(item => item.trending);
    setTrending(filteredTrending);
  }, []);

  // Function to handle navigation to the product details page
  const handleItemClick = (id) => {
    navigate(`/product/${id}`); // Navigate to the product details page with the item ID
  };

  return (
    <div className="px-6">
      <h2 className="text-2xl font-semibold mt-6 mx-auto text-center mb-8">Featured Products</h2>
      
      <div className="flex justify-center space-x-6 md:grid-cols-3 gap-6 justify-items-center">
        {trending.length > 0 ? (
          trending.map((item) => (
            <div 
              key={item.id} 
              className="w-full h-full max-w-sm transition-transform duration-300 hover:scale-105 cursor-pointer" // Added cursor pointer for click indication
              onClick={() => handleItemClick(item.id)} // Call handleItemClick on click
            >
              <Featuredstyle item={item} />
            </div>
          ))
        ) : (
          <div>No trending products available</div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
