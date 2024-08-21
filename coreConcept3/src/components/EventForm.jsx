const EventForm = () => {
  const handleLogInSubmit = (e) => {
    e.preventDefault();
    const email = e.target.userEmail.value;
    const password = e.target.userPassword.value;
    console.log(email, password);
  };
  return (
    <>
      <div className="w-[1140px] mx-auto">
        <div className="flex flex-col justify-center items-center h-[100vh] w-full">
          <div>
            <form onSubmit={handleLogInSubmit}>
              <input type="email" name="userEmail" />
              <br />
              <input type="password" name="userPassword" />
              <br />
              <button
                className="bg-indigo-300 rounded-lg py-3 px-4"
                type="submit"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventForm;
