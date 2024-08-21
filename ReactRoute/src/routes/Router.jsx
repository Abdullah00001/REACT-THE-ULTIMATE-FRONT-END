import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Layout from "../pages/Layout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
      {
        path: "/About",
        element: <About></About>,
      },
    ],
  },
  /* {
    path: "/Contact",
    element: <Contact></Contact>,
  },
  {
    path: "/About",
    element: <About></About>,
  }, */
]);
