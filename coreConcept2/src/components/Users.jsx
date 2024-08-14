import { useEffect, useState } from 'react';
import User from './User';

const Users = () => {
  const [users, setUSers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUSers(data));
  }, []);
  return (
    <>
      <h1>Users : {users.length}</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-2 p-2">
          {users.map((user) => (
            <User name={user.name}></User>
          ))}
        </div>
      </div>
    </>
  );
};

export default Users;
