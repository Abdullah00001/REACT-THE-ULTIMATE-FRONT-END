import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import CreatePost from "../pages/CreatePost";
import Posts from "../pages/Posts";
import PostDetails from "../pages/PostDetails";
import EditPost from "../pages/EditPost";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
      },
      {
        path: "/posts",
        element: <Posts />,
        loader: () => fetch("http://localhost:5000/post"),
      },
      {
        path: "/posts/:id",
        element: <PostDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/post/${params.id}`),
      },
      {
        path: "/posts/Edit/:id",
        element: <EditPost />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/post/${params.id}`),
      },
    ],
  },
]);
