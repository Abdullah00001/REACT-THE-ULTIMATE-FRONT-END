import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Home from "../pages/Home";
import PostDetails from "../components/PostDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home page={"Home"}></Home>,
      },
      {
        path: "/Posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Product page={"Product"}></Product>,
      },
      {
        path: "/Posts/:postId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>,
      },
      {
        path: "/Contact",
        element: <Contact page={"Contact"}></Contact>,
      },
      {
        path: "/About",
        element: <About page={"About"}></About>,
      },
    ],
  },
]);
