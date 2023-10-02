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
    
        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
        setItemCreated(true);

        setName("");
        setQuantity(1);
        setCategory("produce");
            
        setItemCreated(false);
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
}