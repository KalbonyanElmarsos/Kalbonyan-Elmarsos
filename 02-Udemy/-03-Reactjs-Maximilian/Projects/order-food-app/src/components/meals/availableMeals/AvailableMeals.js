import React, { useEffect, useState } from "react";
import Card from "../../usableCompnents/card/Card";
import MealItem from "../mealItem/MealItem";

import mealsStyles from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

export default function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const res = await fetch(
          "https://react-demo-37e14-default-rtdb.firebaseio.com/meals.json"
        );
    console.log(res)  
        if (!res.ok) throw new Error("something went wrong");

        const resJSON = await res.json();

        const formattedMeals = [];
        for (const key in resJSON) {
          formattedMeals.push({
            id: key,
            name: resJSON[key].name,
            description: resJSON[key].description,
            price: resJSON[key].price,
          });
        }

        setMeals(formattedMeals);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchMeals();
  }, []);

  if (isLoading) {
    return <section className={mealsStyles.loading}>Loading....</section>;
  }
  if (error) {
    return <section className={mealsStyles.error}>{error}</section>;
  }

  const allMeals = meals.map((meal) => <MealItem key={meal.id} meal={meal} />);

  return (
    <div className={`${mealsStyles.meals} `}>
      <Card>
        <ul>{allMeals}</ul>
      </Card>
    </div>
  );
}
