

import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../Hooks/UseFetch';
import { useCart } from '../context/CartContext';


const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { data: product, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
    <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-800 text-white rounded-full my-4">{product.category}</div>

    <img
      src={product.image}
      alt={product.title}
      className="object-cover w-full h-64 rounded-lg mb-4"
    />

    <h2 className="text-3xl font-semibold mb-2">{product.title}</h2>
    
    <p className="text-gray-600 mb-4">{product.description}</p>
    
    <div className="flex items-center mb-4">
      <span className="text-gray-700 mr-2">Price:</span>
      <span className="text-green-600 font-semibold text-xl">${product.price}</span>
    </div>

    <div className="flex justify-between mb-4">
      <div className="flex items-center">
        <span className="text-gray-700 mr-2">Rate:</span>
        <span className="text-gray-600">{product.rating.rate}</span>
      </div>
      <div className="flex items-center">
        <span className="text-gray-700 mr-2">Count:</span>
        <span className="text-gray-600">{product.rating.count}</span>
      </div>
    </div>

    <button onClick={() => addToCart(product)}  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none">
      Add to Cart
    </button>
  </div>
  );
};

export default ProductDetails;