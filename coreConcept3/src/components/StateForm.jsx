import { useState } from "react";

const StateForm = () => {
  const [form, setForm] = useState({});
  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <>
      <div className="w-[1140px] mx-auto">
        <div className="flex flex-col justify-center items-center h-[100vh] w-full">
          <div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <br />
              <input onChange={handleInput} type="text" name="name" />
              <br />
              <label htmlFor="email">Email</label>
              <br />
              <input onChange={handleInput} type="email" name="email" />
              <br />
              <label htmlFor="password">Password</label>
              <br />
              <input onChange={handleInput} type="password" name="password" />
              <br />
              <br />
              <button
                className="bg-indigo-300 rounded-lg py-3 px-4"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default StateForm;
