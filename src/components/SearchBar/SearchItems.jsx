import React, { useState } from 'react';
import { products } from '../../products.js';
import { Link } from "react-router-dom";
import { IoIosSearch } from 'react-icons/io';

const SearchItems = () => {
  const [query, setQuery] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setQuery(""); 
    }
  };

 
  const handleItemClick = () => {
    setQuery(""); 
  };

  return (
    <div className="relative mx-4 md:mx-6">
      <div className="flex items-center">
        <IoIosSearch className="absolute left-3 top-3 text-gray-600" size={20} />
        <input
          type="text"
          name="name"
          placeholder="Search"
          className="bg-slate-200 rounded-md p-2 pl-10 w-full md:w-[450px] focus:outline-none focus:ring focus:ring-blue-400"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown} // Attach keydown event
        />
      </div>
    
      {query && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-lg z-30 mt-1 rounded-md">
          {products
            .filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
            .map((item) => (
              <li key={item.id} className="p-2 hover:bg-blue-100">
                <Link to={item.link} className="block" onClick={handleItemClick}>
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default SearchItems;
