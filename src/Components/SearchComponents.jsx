import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useProducts } from '../context/ProductsContext';
import { Link } from 'react-router-dom';


const SearchComponent = () => {
  const products = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if(products){
        const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredProducts)
    }
   ;
  }, [products, searchTerm]);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10 pr-4 py-2 rounded-full border border-gray-500 focus:outline-none focus:border-blue-500"
      />
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
        <FaSearch className="text-gray-500" />
      </div>
      {
        searchTerm &&  <div className="px-4 pb-4 absolute bg-slate-900 z-20 mt-4 -left-16 max-h-80 w-96 overflow-y-auto">
        {searchResults.map((product) => (
               <Link
               key={product.id}
               to={`/product/${product.id}`}
              
             >
          <div
            key={product.id}
            className="flex items-center border-b py-2 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-28 h-32 object-cover mr-4 rounded-lg"
            />
            <div>
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-500">{product.category}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
      }
      
    </div>
  );
};

export default SearchComponent;
