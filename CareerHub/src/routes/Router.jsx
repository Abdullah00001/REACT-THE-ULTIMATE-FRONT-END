import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import ServiceDetail from "../pages/ServiceDetail";
import axios from "axios";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "Services/:id",
        element: <ServiceDetail></ServiceDetail>,
        loader: async ({ params }) => {
          const response = await axios.get(
            `http://127.0.0.1:8000/Services/${params.id}`
          );
          return response.data;
        },
      },
    ],
  },
]);
