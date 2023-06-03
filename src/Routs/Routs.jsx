import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Sheared/Secret/Secret";
import PrivetRoute from "./PrivetRoute";
import DashBoard from "../Layout/DashBoard";
import Mycart from "../pages/DashBoard/MyCart/Mycart";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import AddItem from "../pages/DashBoard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/DashBoard/ManageItems/ManageItems";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
            ,{
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/secret',
                element: <PrivetRoute><Secret></Secret></PrivetRoute>
            }
        ]
    },
    {
        path:'dashboard',
        element: <PrivetRoute><DashBoard></DashBoard></PrivetRoute>,
        children:[
            {
                path:'mycart',
                element:<Mycart></Mycart>
            },
            {
                path:'allusers',
                element:<AllUsers></AllUsers>
            },
            {
                path:'additem',
                element:<AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path:'manageitems',
                element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
            }
        ]
    }
])


export default router;