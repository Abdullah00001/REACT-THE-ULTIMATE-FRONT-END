import { useLoaderData } from "react-router-dom";
import Meal from "../components/Meal";

const Meals = () => {
  const meals = useLoaderData();
  console.log(meals.meals);
  return (
    <>
      <div className="w-[1140px] mx-auto">
        <div className="p-4">
          <h1 className="text-5xl text-center">This Is Meals Page</h1>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {meals.meals.map((meal) => (
            <Meal key={meal.idMeal} meal={meal}></Meal>
          ))}
        </div>
      </div>
    </>
  );
};

export default Meals;
