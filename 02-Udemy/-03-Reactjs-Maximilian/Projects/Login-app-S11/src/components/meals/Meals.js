import React from "react";
import AvailableMeals from "./availableMeals/AvailableMeals";
import MealsSummary from "./mealsSummary/MealsSummary";

export default function Meals() {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
}
