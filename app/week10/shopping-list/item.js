
import React from 'react';

export default function Item({ name, quantity, category, onSelect }) {
  const handleClick = () => {
    if (typeof onSelect === 'function') {
      onSelect(name); // Pass the name of the item to the onSelect function
    }
  };

  return (
    <div className="p-2 m-4 bg-slate-900 max-w-sm  hover:bg-orange-800 cursor-pointer" onClick={handleClick}>
      <h3 className="text-xl font-bold">{name}</h3>
      <p>Buy {quantity} in {category}</p>
    </div>
  );
} 
