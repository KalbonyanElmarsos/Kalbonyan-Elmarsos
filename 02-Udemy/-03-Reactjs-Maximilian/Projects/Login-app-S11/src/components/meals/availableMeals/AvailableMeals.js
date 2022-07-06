import React from "react";
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
  const allMeals = DUMMY_MEALS.map((meal) => (
    <MealItem key={meal.id} meal={meal} />
  ));
  return (
    <div className={`${mealsStyles.meals} `}>
      <Card>
        <ul>{allMeals}</ul>
      </Card>
    </div>
  );
}
