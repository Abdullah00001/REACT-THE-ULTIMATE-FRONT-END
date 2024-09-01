import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../pages/Home";
import Private from "../components/Private";
export const router = createBrowserRouter([
  {
    element: <Login />,
    path: "/login",
  },
  {
    element: <Register />,
    path: "/register",
  },
  {
    element: (
      <Private>
        <Home />
      </Private>
    ),
    path: "/",
  },
]);
