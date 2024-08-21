import { useLoaderData } from "react-router-dom";

const MealDetails = () => {
  const mealDetails = useLoaderData();
  console.log(mealDetails.meals[0]);
  const meal = mealDetails.meals[0];
  const {
    idMeal,
    strMealThumb,
    strMeal,
    strTags,
    strCategory,
    strArea,
    strInstructions,
  } = meal;
  return (
    <>
      <div className="w-[1140px] mx-auto">
        <div className="flex flex-col h-[100%] py-6 justify-center items-center w-full">
          <div className="w-[800px]">
            <div className="flex gap-4 w-full">
              <div>
                <img
                  className="w-[400px] rounded-lg border-l-2 border-t-2 border-black"
                  src={strMealThumb}
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-5 ">{strMeal}</h1>
                <h3 className="text-xl leading-[50px] font-medium">
                  Category : {strCategory}
                </h3>
                <h3 className="text-xl leading-[50px] font-medium">
                  Tags : {strTags}
                </h3>
                <h3 className="text-xl leading-[50px] font-medium">
                  Meal Origin : {strArea}
                </h3>
              </div>
            </div>
            <div className="mt-5">
              <h1 className="text-4xl">Instruction :</h1>
              <p className="mt-6 text-md leading-7">{strInstructions}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MealDetails;
