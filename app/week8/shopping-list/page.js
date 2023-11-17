"use client";
import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  function handleMealSelect(mealId) {
    console.log('mealId: ' + mealId);
    setSelectedItemId(mealId);
  }

  function handleItemSelect(itemName) {
    const cleanItemName = itemName.split(" ")[0].split(",")[0];
    setSelectedItemName(cleanItemName);
  }

  
  function onClickSort(itemsSorted) {
    setItems(itemsSorted);
  }

  function handleMealSelect(mealId) {
    setSelectedItemId(mealId);
  }

    return (
      <main className="bg-slate-950 p-2 m-2">
        <h2 className="text-3xl font-bold mb-4">Shopping List</h2>
        <div className="flex">
            <div className="flex-1 max-w-md m-2">
               <h3 className="text-xl font-bold">Add New Item</h3>
                <NewItem onAddItem={(item) => handleAddItem(item)} />
                <ItemList items={items} onClickSort={onClickSort} onItemSelect = {handleItemSelect} />
            </div>
            <div className="flex-1 max-w-sm m-2">
                <MealIdeas ingredient = {selectedItemName} onMealSelect = {handleMealSelect}/>
            </div>
        </div>
      </main>
    );
  
}

/**const handleItemSelect = (itemName) => {
    if (typeof itemName === 'string') {
      // Clean up the selected item name
      const cleanItemName = itemName
        .split(',')[0] // Remove everything after the comma
        .trim(); // Remove leading and trailing whitespace

      setSelectedItemName(cleanItemName);
    }
  };*/

  
/**return (
    <main className="bg-slate-950 p-2 m-2">
          <h2 className="text-3xl font-bold mb-4">Shopping List</h2>
            <div className="flex">
              <div className="flex-1 max-w-md m-2">
                <h3 className="text-xl font-bold">Add New Item</h3>
                  <NewItem onAddItem={handleAddItem} />
                  <ItemList items={items} onItemSelect={handleItemSelect} />
              </div>
        
          <h2 className="text-3xl font-bold m-2">Meal Ideas</h2>
          {selectedItemName ? (
            <MealIdeas ingredient={selectedItemName} />
          ) : (
            <p>Select an item to see meal ideas</p>
          )}
        </div>
        
      
    </main>
  );*/
