import React from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import SearchComponent from './SearchComponents';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { cartItems } = useCart();
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={`/`}>
        <div className="text-white font-bold text-xl">My Store</div>
        </Link>
       
        <div className="flex items-center space-x-4">
          <SearchComponent/>
          <Link to={`/cart`}>
          <div className="relative">
            <FaShoppingCart className="text-white text-2xl cursor-pointer" />
          
            {cartItems.length > 0 && (
              <div className="absolute top-0 right-0 -mt-1 -mr-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </div>
            )}
          </div>
          </Link>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
