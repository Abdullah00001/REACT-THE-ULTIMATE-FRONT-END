import { useNavigate } from "react-router-dom";

const Meal = ({ meal }) => {
  const navigate = useNavigate();
  console.log(meal);
  const { idMeal, strMealThumb, strMeal, strTags } = meal;
  const handleShowDetail = () => {
    navigate(`/Meals/${idMeal}`);
  };
  return (
    <>
      <div className="w-full p-2 border-2 border-black rounded-md">
        <div className="w-full">
          <img className="rounded-md" src={strMealThumb} alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-bold leading-10 mt-2">
            {strMeal.slice(0, 8)}
          </h1>
          <h5 className="text-md font-medium leading-7">{strTags}</h5>
          <button
            onClick={handleShowDetail}
            className="py-3 px-3 rounded-lg bg-green-200 font-bold mt-5 text-purple-800"
          >
            Show Details
          </button>
        </div>
      </div>
    </>
  );
};

export default Meal;
