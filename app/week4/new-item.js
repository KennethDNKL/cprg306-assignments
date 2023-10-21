"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1); // Set initial value to 1
    const [category, setCategory] = useState("produce"); // Set initial value to "produce"
    const [itemCreated, setItemCreated] = useState(false);

    const handleSubmit = (item) => {
        item.preventDefault();
    
        const newItem = {
          name,
          quantity,
          category,
        };
        console.log(newItem);
        
        alert(`Added item: ${name}, Quantity: ${quantity}, Category: ${category}`);
        
        setName("");
        setQuantity(1);
        setCategory("produce");
        setItemCreated(true);

        };

      const handleNameChange = (item) => {
        setName(item.target.value);
      };
    
      const handleQuantityChange = (item) => {
        setQuantity(item.target.value);
      };
    
      const handleCategoryChange = (item) => {
        setCategory(item.target.value);
      };

      return (
        <main class ="flex justify-center w-full">
            
            <form className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full 1"
             onSubmit={handleSubmit}>
            <label class ="mb-2">
                <input
                    required class ="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                    type="text"
                    placeholder="Item name"
                    onChange={handleNameChange}
                    value={name}
                />
            </label>
            <div className="flex justify-between p-2">
                            <div>
                                <input
                                    required
                                    className="w-20 mr-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                                    type="number"
                                    min="1"
                                    max="99"
                                    onChange={handleQuantityChange}
                                    value={quantity}
                                />
                            </div>
                        
            <select class ="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                    onChange={handleCategoryChange} 
                    value={category}>
                
                <option value="" disabled="">Category</option>
                <option value="produce" selected="">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen foods">Frozen Foods</option>
                <option value="canned goods">Canned Goods</option>
                <option value="dry goods">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option></select>
            </div>    
                <button 
                    type="submit" 
                    className="w-full mt-1 py-2 px-4
                    bg-blue-500 text-white font-semibold rounded-lg shadow-md
                    hover:bg-blue-700 focus:outline-none focus:ring-2
                    focus:ring-blue-400 focus:ring-opacity-75">+</button>    
            
            </form>
            
                
            
            
        </main>
      );
}