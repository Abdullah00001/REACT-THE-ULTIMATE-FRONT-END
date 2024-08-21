import { useRef } from "react";

const RefForm = () => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      name.current.value,
      email.current.value,
      password.current.value
    );
  };
  return (
    <>
      <div className="w-[1140px] mx-auto">
        <div className="flex flex-col justify-center items-center h-[100vh] w-full">
          <div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <br />
              <input ref={name} type="text" name="name" />
              <br />
              <label htmlFor="email">Email</label>
              <br />
              <input ref={email} type="email" name="email" />
              <br />
              <label htmlFor="password">Password</label>
              <br />
              <input ref={password} type="password" name="password" />
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

export default RefForm;
