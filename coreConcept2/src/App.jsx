import { useState } from 'react';
import './App.css';
import Users from './components/Users';
import Todos from './components/Todos';

function App() {
  const [count, setCount] = useState(0);
  const addLike = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1 className="text-5xl text-red-400">Hello world</h1>
      <h3>Likes : {count}</h3>
      <button onClick={addLike}>Like</button>
      <Users></Users>
      <Todos></Todos>
    </>
  );
}

export default App;
