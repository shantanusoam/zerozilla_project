import React, { useState, useEffect, useContext } from 'react';
import useFetch from '../Hooks/UseFetch';


const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const { data, loading, error } = useFetch('https://fakestoreapi.com/products');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  return <ProductsContext.Provider value={products}>{children}</ProductsContext.Provider>;
};

export const useProducts = () => {
  return useContext(ProductsContext);
};