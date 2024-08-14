import { useEffect, useState } from "react";
import Todo from "./Todo";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);
  return (
    <>
      <div className="container mx-auto mt-[100px]">
        <div className="grid grid-cols-3 gap-3 p-3">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo}></Todo>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todos;
