import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../Hooks/UseFetch';


const CategoryItem = ({ category }) => {
  const { data: products, loading, error } = useFetch(`https://fakestoreapi.com/products/category/${category}`);
    
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products</div>;
  }

  return (
    <div className="border p-4">
      <h2 className="text-xl font-semibold mb-4">{category}</h2>
      {products.map((product) => (
       <Link
       key={product.id}
       to={`/product/${product.id}`}
       className="block mb-4 p-4 bg-white rounded-lg shadow-md transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105"
     >
       <div className="relative mb-4">
         <img
           src={product.image}
           alt={product.title}
           className="object-cover w-full h-48 rounded-lg"
         />
         <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
           <span className="text-white text-lg font-bold">View Details</span>
         </div>
       </div>
 
       <div className="flex justify-between mb-2">
         <div className="flex items-center">
           <span className="text-gray-600 mr-1">Rate</span>
           {product.rate}
         </div>
         <div className="flex items-center">
           <span className="text-gray-600 mr-1">Count</span>
           {product.count}
         </div>
       </div>
 
       <div className="text-lg font-semibold text-gray-800">{product.title}</div>
     </Link>
      ))}
    </div>
  );
};

export default CategoryItem;