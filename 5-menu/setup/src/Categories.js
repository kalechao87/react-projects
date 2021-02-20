import React from 'react';

const Categories = ({ categories, onFilterItems }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            className='filter-btn'
            key={index}
            onClick={() => onFilterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
