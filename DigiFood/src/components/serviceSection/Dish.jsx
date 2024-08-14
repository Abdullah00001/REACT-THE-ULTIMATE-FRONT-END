import { FaRegClock, FaFire } from "react-icons/fa6";
const Dish = ({ dish, cook }) => {
  const {
    calories_count,
    cooking_time,
    ingredients,
    short_description,
    dish_name,
    dish_img,
    id,
  } = dish;
  return (
    <>
      <div className="p-6 border-[1px] border-gray-400 rounded-2xl">
        <div>
          <img className="w-full rounded-2xl" src={dish_img} alt="" />
        </div>
        <div className="mt-6">
          <h1 className="text-[20px] font-semibold text-[#282828]">
            {dish_name}
          </h1>
          <h5 className="text-[#878787] text-[16px] mt-3">
            {short_description}
          </h5>
        </div>
        <div className="mt-6">
          <h1 className="text-[18px] font-medium">
            Ingredients : {ingredients.length}
          </h1>
          <div className="ml-8 mt-4">
            <ul className="list-disc">
              {ingredients.map((Ingredient) => (
                <li className="text-[18px] text-[#878787]">{Ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-4 text-[16px] text-[#878787] mt-6">
          <div className="flex items-center gap-2">
            <i>
              <FaRegClock />
            </i>
            <h6>{cooking_time} Minutes</h6>
          </div>
          <div className="flex items-center gap-2">
            <i>
              <FaFire />
            </i>
            <h6>{calories_count} Calories</h6>
          </div>
        </div>
        <button
          onClick={() => cook(dish)}
          className="bg-[#6125dd] text-white text-[18px] font-medium mt-4 py-[8px] px-[10px] rounded-[50px]"
        >
          Want to Cook
        </button>
      </div>
    </>
  );
};

export default Dish;
