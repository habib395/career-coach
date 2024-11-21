import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Details from "../components/Details/Details";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from './../components/PrivateRoute/PrivateRoute';
import About from "../components/About/About";
import Forgot from "../components/Forgot/Forgot";

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
                element:<PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>,
            },
            {
                path:"/forgot",
                element: <Forgot></Forgot>,
            },
            {
                path: "/details/:id",
                element:<PrivateRoute>
                    <Details></Details>
                </PrivateRoute>,
                loader:async({ params })=>{
                    const res =await fetch("/service.json")
                    const data = await res.json()
                    const singleData = data.find(d=>d.id == params.id)
                    return singleData
                }
            },
            {
                path: "/about",
                element:<PrivateRoute>
                    <About></About>
                </PrivateRoute>,
                loader:() => fetch("/service.json")
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path:"/register",
                element: <Register></Register>
            }
        ],
    },
    {
        path: "*",
        element:<div className=" w-1/2 font-bold mx-auto text-black text-3xl text-center bg-[#53dda8] my-10 py-10 rounded-full opacity-90">Page not Found 
        <br />
        <a href="/" className="text-blue-500 underline mt-4 block">Go back to Home</a>
        </div>,
    }
])

export default router;