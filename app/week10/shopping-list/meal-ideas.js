
import React, { useEffect, useState } from 'react';
import Ingredients from "./ingredients";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState("");

  async function fetchMealIdeas() {
    try{
        if (ingredient) {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            
            // Check if the API response contains meals
            if (data.meals && data.meals.length > 0) {
              setMeals(data.meals);
              setSelectedItemId("");
            } else {
              // No meals found for the ingredient
              setMeals([]);
            }
      }
    }catch(error) {
        console.log("Error", error);
    }
}

  useEffect(() => {
      fetchMealIdeas();
  }, [ingredient])

  return (
    <div>
      <h3 className="text-xl font-bold">Meal Ideas</h3>
      <ul>
        {ingredient === '' ? (
          <li>Select an item to see meal ideas.</li>
        ) : meals === null || meals.length === 0 ? (
          <li>No meal ideas found for {ingredient}.</li>
        ) : (
          meals.map((meal) => (
            <li key={meal.idMeal} className="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer" onClick={() => setSelectedItemId(meal.idMeal)}>
              {meal.strMeal}
              {meal.idMeal === selectedItemId ? <Ingredients idMeal={selectedItemId} /> : null}
            </li>
          ))
        )}
      </ul>
    </div>
);

  /**return(
    <main>
            <div>
                <h3 className="text-xl font-bold">Meal Ideas</h3>
                <p>{ingredient? `Here are some meal ideas using ${ingredient}: ` : `No meal ideas found for: ${ingredient}` }</p>
              <ul>
                {meals.map((item) => (
                  <li key={item.idMeal} className="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer" onClick={() => setSelectedItemId(item.idMeal)}>
                    {item.strMeal}
                    {item.idMeal === selectedItemId ? <Ingredients idMeal={selectedItemId} /> : null}
                  </li>
                ))}
              </ul>
            </div>
    </main>
);*/
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
