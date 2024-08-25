import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import PostDetail from "../pages/PostDetail";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Posts",
        element: <Posts />,
        loader: () => fetch(`http://localhost:3000/Posts`),
      },
      {
        path: "/Posts/:id",
        element: <PostDetail />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/Posts/${params.id}`),
      },
    ],
  },
]);
