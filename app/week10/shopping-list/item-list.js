"use client";
import Item from "./item";
import React, { useState } from 'react';


export default function ItemList({items, onItemSelect}) {
  const [sortBy, setSortBy] = useState('name');
  
  // Sort the items array based on sortBy
  const sortedItems = [...items]; // Create a copy of the original items array
  
  sortedItems.sort((a, b) => {
    if (sortBy === 'name' && a.name && b.name && typeof a.name === 'string' && typeof b.name === 'string') {
      return a.name.localeCompare(b.name); // Sort by name
    } else if (sortBy === 'category' && a.category && b.category && typeof a.category === 'string' && typeof b.category === 'string') {
      return a.category.localeCompare(b.category); // Sort by category
    }
    // Handle other cases or return a default value if the properties are not valid for sorting
    return 0;
  });

  // Function to handle button click and change sorting preference and button color
 
  return (
    <div className="m-4">
    
    <div>
      <label htmlFor="sort">Sort by: </label>
      <button
        onClick={() => setSortBy("name")}
        className={
          sortBy === "name"
            ? "bg-orange-500 p-1 m-2 w-28"
            : "bg-orange-700 p-1 m-2 w-28"
        }
      >
        Name
      </button>
      <button
        onClick={() => setSortBy("category")}
        className={
          sortBy === "category"
            ? "bg-orange-500 p-1 m-2 w-28"
            : "bg-orange-700 p-1 m-2 w-28"
        }
      >
        Category
      </button>
      </div>
  
    <ul>
    {sortedItems.map((item) => (
          <li key={item.id} onClick={() => onItemSelect(item.name)}>
            <Item
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
        </li>
      ))}
    </ul>
  </div>
  );
}

