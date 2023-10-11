import React from 'react';

import CategoryItem from './CategoryItem';
import useFetch from '../Hooks/UseFetch';

const Categories = () => {
  const { data: categories, loading, error } = useFetch('https://fakestoreapi.com/products/categories');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading categories</div>;
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {categories.map((category) => (
        <CategoryItem key={category} category={category} />
      ))}
    </div>
  );
};

export default Categories;
