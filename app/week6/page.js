"use client";
import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';


export default function Page() {
    // Initialize a state variable 'items' with the data from items.json
    const [items, setItems] = useState(itemsData);
  
    // Event handler to add a new item to the 'items' state
    const handleAddItem = (newItem) => {
      setItems([...items, newItem]);
    };
  
    return (
      <main className="bg-slate-950">
        <div>
          <h2 className="text-3xl font-bold m-2">Shopping List</h2>
          <NewItem onAddItem={handleAddItem} /> {/* Pass the event handler as a prop */}
          <ItemList items={items} /> {/* Pass the 'items' state as a prop */}
        </div>
      </main>
    );
  }