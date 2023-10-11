import React from 'react';
import { useCart } from '../context/CartContext';


const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {cartItems.map((item) => (
            <li key={item.id} className="py-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img src={item.image} alt={item.title} className="w-12 h-12 object-cover" />
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-500">{item.category}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 focus:outline-none"
              >
                Remove from Cart
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
