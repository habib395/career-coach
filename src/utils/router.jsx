import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/profile",
                element:<Profile></Profile>
            }
        ]
    }
])

export default router;