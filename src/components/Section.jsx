import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { categoriesData } from '../categories.js';
import Products from './Products';
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts.jsx"

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  return (
    <>
      <FeaturedProducts />
      <h1 className="max-w-[1640px] text-center mt-[80px] font-semibold text-2xl mx-[100px] sm:text-xl"> 
        Categories
      </h1>
      <div className=" flex flex-wrap justify-center space-x-6 items-center px-4 m-8"> 
        {categories.map(item => (
          <div key={item.id} className="category-item mb-4"> 
            <Link to={item.link}>
              <Products item={item} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
