import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Meals from "../pages/Meals";
import MealDetails from "../components/MealDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Meals",
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b"),
        element: <Meals></Meals>,
      },
      {
        path: "/Meals/:mealID",
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealID}`
          ),
        element: <MealDetails></MealDetails>,
      },
    ],
  },
]);
