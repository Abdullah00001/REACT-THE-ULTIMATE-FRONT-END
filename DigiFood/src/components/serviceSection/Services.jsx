import { useEffect, useState } from "react";
import Dish from "./Dish";
import Cook from "./Cook";
import Preparing from "./Preparing";

const Services = () => {
  const [dishes, setDish] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/ab37b93b-4379-44af-808f-fe76e1ac97d9")
      .then((res) => res.json())
      .then((data) => setDish(data));
  }, []);
  const [cook, setCook] = useState([]);
  const [prepare, setPrepare] = useState([]);
  const [calories, setCalories] = useState(0);
  const [time, setTime] = useState(0);

  const handleCook = (dish) => {
    setCook([...cook, dish]);
  };
  const handlePrepare = (prepareDish) => {
    const index = cook.findIndex((item) => item.id === prepareDish.id);
    const cookArray = [...cook];
    cookArray.splice(index, 1);
    setCook(cookArray);
    setPrepare([...prepare, prepareDish]);
    setCalories(calories + prepareDish.calories_count);
    setTime(time + prepareDish.cooking_time);
  };
  console.log(dishes, cook, prepare);
  return (
    <>
      <div className="w-[1140px] mx-auto">
        <div className="text-center mt-4">
          <h1 className="text-[40px] font-semibold">Our Recipes</h1>
          <h5 className="text-[16px] leading-6">
            Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
            vulputate netus pharetra rhoncus. Eget <br /> urna volutpat
            curabitur elementum mauris aenean neque.
          </h5>
        </div>

        <div className="flex gap-6 w-full mt-3">
          <div className="w-[55%] grid grid-cols-2 gap-6">
            {dishes.map((dish) => (
              <Dish key={dish.id} dish={dish} cook={handleCook}></Dish>
            ))}
          </div>
          <div className="w-[45%] py-8 flex flex-col h-[685px] gap-8 border-[1px] border-[#878787] rounded-[16px]">
            <div>
              <h1 className="text-center">Want to cook: {cook.length}</h1>
              <Cook cook={cook} handlePrepare={handlePrepare}></Cook>
            </div>
            <div>
              <h1 className="text-center">
                Currently cooking: {prepare.length}
              </h1>
              <Preparing cook={prepare}></Preparing>
              {console.log(calories, time)}
              <div className="w-full flex justify-end mt-3">
                <table className="w-[250px] table">
                  <thead>
                    <tr>
                      <th>Total Calories =</th>
                      <th>Total Time =</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{calories} Calories</td>
                      <td>{time} Minutes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
