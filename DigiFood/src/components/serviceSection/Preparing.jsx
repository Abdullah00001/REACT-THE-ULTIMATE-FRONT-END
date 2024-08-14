const Preparing = ({ cook }) => {
  console.log(cook);
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
            </tr>
          </thead>
          <tbody>
            {cook.map((dish) => (
              <tr>
                <th>{dish.id}</th>
                <td>{dish.dish_name}</td>
                <td>{dish.cooking_time} Minutes</td>
                <td>{dish.calories_count} Calories</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </>
  );
};

export default Preparing;
