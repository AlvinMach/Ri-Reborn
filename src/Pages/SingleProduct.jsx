import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../products.json'; // Make sure the path is correct

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track any errors

  useEffect(() => {
    const fetchProductDetails = () => {
      // Find the product by ID
      const productItem = productsData.protectiveWear.find(item => item.id === parseInt(id)); 
      if (productItem) {
        setProduct(productItem);
      } else {
        setError('Product not found'); // Set error if product not found
      }
      setLoading(false); // Set loading to false once fetching is done
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Display loading state while fetching
  }

  if (error) {
    return <div>{error}</div>; // Display error message if product not found
  }

  return (
    <div className="px-6">
      <h2 className="text-2xl font-semibold mt-6 mx-auto text-center mb-8">{product.title}</h2>
      <img src={product.image} alt={product.title} className="w-full" />
      <p className="mt-2">{product.description}</p>
      <p className="mt-2 text-lg font-semibold">{product.price ? `$${product.price}` : 'Price not available'}</p>
    </div>
  );
};

export default ProductDetails;
