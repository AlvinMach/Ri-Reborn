import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { databases } from '../config/config';
import Navbar from '../components/Navbar';

const SingleProductPage = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await databases.getDocument(
          import.meta.env.VITE_DATABASE_ID,
          import.meta.env.VITE_COLLECTION_ID,
          itemId
        );
        setItem(response);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [itemId]);

 
  

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-4">
        <Navbar />
        <div className="max-w-4xl mx-auto mt-6 bg-white shadow-lg rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
       
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold mb-2">{item?.title}</h1>
            <p className="text-gray-700 mb-4">{item?.body}</p>
            <p className="text-gray-600 mb-4">Location: {item?.Location}</p>
          </div>

    
          <div className="flex flex-col justify-center">
          
              <button
                onClick={() => addToCart(id)}
                className="bg-blue-500 text-white py-2 rounded-lg mb-4 hover:bg-blue-600 transition duration-200"
              >
                Add to Cart
              </button>
         
            <button
             
              className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;

