"use client"
import React, { useEffect, useState } from 'react';
import Ingredients from "./ingredients";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState("");

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        setMeals(data.meals);
      } catch (error) {
        console.error('Error fetching meal ideas:', error);
      }
    };

    if (ingredient) {
      fetchMeals();
    }
  }, [ingredient]);


  return(
    <main>
            <div>
                <h3 className="text-xl font-bold">Meal Ideas</h3>
                <p>{ingredient? `Here are some meal ideas using ${ingredient}: ` : `No meal ideas found for: ${ingredient}` }</p>
                <ul>
                   {meals && meals.map((item) => {
                    return(
                            <li  key={item.idMeal} className="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer" onClick={() => setSelectedItemId(item.idMeal)}>{item.strMeal}
                                    {item.idMeal == selectedItemId ? <Ingredients idMeal = {selectedItemId}/> : null}
                            </li>
                           )
                        })
                    }

                </ul>
            </div>
    </main>
);
  /**return (
    <div>
      {meals && meals.length > 0 ? (
        <>
          <h2>Here are some meal ideas using {ingredient}:</h2>
          <ul>
            {meals.map((meal) => (
              <li key={meal.idMeal}
              className="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer">
                {meal.strMeal}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>No meal ideas found for {ingredient}</p>
      )}
    </div>
  );*/
}
