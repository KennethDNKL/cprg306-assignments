"use client";

import Item from "./item";
import itemsData from './items.json';
import React, { useState } from 'react';


/**export default function ItemList() {
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
}*/

// from Aaron instructor
export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  let items = [...itemsData];
  if (sortBy === "name") {
    items.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortBy === "category") {
    items.sort((a, b) => a.category.localeCompare(b.category));
  }
  const groupedItems = items.reduce((groups, item) => {
    const category = item.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    groups[category].sort((a, b) => a.name.localeCompare(b.name));
    return groups;
  }, {});
  return (
    <div className="m-4">
      <h2 className="text-3xl font-bold m-2">Shopping List</h2>
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
        <button
          onClick={() => setSortBy("group-category")}
          className={
            sortBy === "group-category"
              ? "bg-orange-500 p-1 m-2 w-28"
              : "bg-orange-700 p-1 m-2 w-28"
          }
        >
          Grouped Category
        </button>
        <label
          className="absolute top-20 left-240  text-gray-600 text-xs italic"
          htmlFor="group-category"
        >
          &larr; &quot;Grouped Category&quot; is an optional extra challenge
        </label>
      </div>
      {sortBy === "group-category" ? (
        <div>
          {Object.entries(groupedItems)
            .sort((a, b) => a[0].localeCompare(b[0])) // sort categories
            .map(([category, items]) => (
              <div key={category}>
                <h3 className="capitalize text-xl">{category}</h3>
                <ul>
                  {items.map((item) => (
                    <Item key={item.id} {...item} />
                  ))}
                </ul>
              </div>
            ))}
        </div>
      ) : (
        <ul>
          {items.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </ul>
      )}
    </div>
  );
}

