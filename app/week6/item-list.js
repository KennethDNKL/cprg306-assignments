import Item from "./item";
import React, { useState } from 'react';


export default function ItemList({items}) {
  const [sortBy, setSortBy] = useState('name');
  const [nameButtonColor, setNameButtonColor] = useState('bg-orange-700');
  const [categoryButtonColor, setCategoryButtonColor] = useState('bg-orange-700');

  // Sort the items array based on sortBy
  const sortedItems = [...items]; // Create a copy of the original items array
  
  sortedItems.sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name); // Sort by name
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category); // Sort by category
    }
    return 0; // Default case, no sorting
  });

  // Rest of your component code goes here
 
  // Function to handle button click and change sorting preference and button color
  const handleButtonClick = (preference) => {
    setSortBy(preference);
    if (preference === 'name') {
      setNameButtonColor('bg-orange-500');
      setCategoryButtonColor('bg-orange-700');
    } else if (preference === 'category') {
      setNameButtonColor('bg-orange-700');
      setCategoryButtonColor('bg-orange-500');
    }
  };

  return (
    <div>
      <label for="sort">Sort by: </label>
      <button onClick={() => {
          handleButtonClick('name');
        }}
        className={`${nameButtonColor} p-1 m-2 w-28`} >Name</button>
      <button onClick={() => {
          handleButtonClick('category');
        }}
        className={`${categoryButtonColor} p-1 m-2 w-28`}>Category</button>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id} // Use a unique key prop, assuming there's an 'id' property
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}

