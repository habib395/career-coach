import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Details from "../components/Details/Details";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: "/",
                element:<Home></Home>,
                loader:() => fetch("/service.json")
            },
            {
                path: "/profile",
                element:<Profile></Profile>
            },
            {
                path: "/details/:id",
                element:<Details></Details>,
                loader:async({ params })=>{
                    const res =await fetch("/service.json")
                    const data = await res.json()
                    const singleData = data.find(d=>d.id == params.id)
                    return singleData
                }
            },
        ]
    }
])

export default router;