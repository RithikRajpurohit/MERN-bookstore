import { createBrowserRouter,RouterProvider } from "react-router";
import App from "../App";
import Home from "../Home/Home";
import Shop from "../shop/shop";
import About from "../Components/About";
import Blog from "../Components/Blog";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/shop",
                element:<Shop/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/blog",
                element:<Blog/>
            }
        ]
    },
])

export default router;