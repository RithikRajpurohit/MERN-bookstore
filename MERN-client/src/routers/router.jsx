import { createBrowserRouter,RouterProvider } from "react-router";

import App from "../App";
import Home from "../Home/Home";
import Shop from "../shop/shop";
import About from "../Components/About";
import Blog from "../Components/Blog";
import SingleBook from "../Shop/SingleBook";
import DashBoardLayout from "../dashboard/DashBoardLayout";
import DashBoard from "../dashboard/DashBoard";
import UploadBook from "../dashboard/UploadBook";
import MangaBook from "../dashboard/MangaBook";
import EditBook from "../dashboard/EditBook";

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
            },
            {
                path:"/book/:id",
                element:<SingleBook/>,
                loader:({params})=>fetch(`http://localhost:5000/book/${params.id}`)
            },

        ]
    },
    {
        path:"/admin/dashboard",
        element:<DashBoardLayout/>,
        children:[
        {
            path:"/admin/dashboard",
            element:<DashBoard/>
        },
        {
            path:"/admin/dashboard/upload",
            element:<UploadBook/>
        },
        {
            path:"/admin/dashboard/manage",
            element:<MangaBook/>
        },
        {
            path:"/admin/dashboard/edit-books/:id",
            element:<EditBook/>,
            loader:({params})=>fetch(`http://localhost:5000/book/${params.id}`)
        }
    ]
    }
])

export default router;