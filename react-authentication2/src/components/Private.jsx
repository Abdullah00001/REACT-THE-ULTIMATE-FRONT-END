import Login from "./Login";

function Private({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  if (user.email) {
    return children;
  } else {
    return <Login></Login>;
  }
}

export default Private;
