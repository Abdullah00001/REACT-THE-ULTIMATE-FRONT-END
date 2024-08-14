const User = ({ name }) => {
  return (
    <>
      <div className="rounded-md p-2 border-2 border-blue-300">
        <h1>Name : {name}</h1>
      </div>
    </>
  );
};

export default User;
