const Cook = ({ cook, handlePrepare }) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cook.map((dish) => (
              <tr>
                <th>{dish.id}</th>
                <td>{dish.dish_name}</td>
                <td>{dish.cooking_time} Minutes</td>
                <td>{dish.calories_count} Calories</td>
                <td>
                  <button
                    onClick={() => handlePrepare(dish)}
                    className="py-2 px-4 bg-[#6125dd] rounded-[50px] font-bold text-white"
                  >
                    Prepare
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cook;
