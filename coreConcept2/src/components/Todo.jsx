import { useEffect, useState } from "react";

const Todo = ({todo}) => {
  const {userId, title, completed}=todo
  console.log(userId,title,completed);
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  },[userId]);
  return (
    <>
      <div className="w-full p-2 rounded-md border-2 border-black">
        <h1>User Name : {user.name}</h1>
        <h1>Email : {user.email}</h1>
        <h3>Todo : {title}</h3>
        {completed ? (
          <h4 className="text-green-400">Completed</h4>
        ) : (
          <h4 className="text-red-400">Pending</h4>
        )}
      </div>
    </>
  );
};

export default Todo;
