import {createBrowserRouter} from "react-router-dom"
import Main from "../layout/Main"
import Home from "../pages/Home"

export const Router=createBrowserRouter([
    {
        element:<Main></Main>,
        path:"/",
        children:[
            {
                element:<Home></Home>,
                path:"/",
            }
        ]
    }
])