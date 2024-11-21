import React, { useContext } from "react";
import "./Navbar.css";
import { CiCloudSun } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, handleLogOut } = useContext(AuthContext);
  // console.log(user);
  return (
    <div className="bg-base-200">
      <div className="w-11/12 mx-auto min-h-20 sm:flex flex-cols justify-between items-center">
        <div className="sm:flex sm:font-bold text-center items-center text-sm md:text-3xl text-accent">
          <div className="hidden md:block"><CiCloudSun /></div>
          <p className="font-bold py-5">LIFE COACH</p>
        </div>
        <div className="flex font-semibold justify-between sm:flex-row sm:gap-3">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about" className="ml-5">About</NavLink>
          <NavLink to="/profile" className="ml-5">
            My Profile
          </NavLink>
        </div>
        <div>
          {user?.email ? (
            <div className="flex justify-between gap-3 py-2">
              <div className="relative group">
                <img
                  className="w-12 h-12 rounded-full object-cover hover:opacity-75"
                  src={user.photoURL}
                  alt={user.displayName}
                />
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {user.displayName}
                </span>
              </div>
              <button className="btn btn-accent" onClick={handleLogOut}>
                Logout
              </button>
            </div>
          ) : (
            <NavLink to="/login">
              <button className="btn btn-accent">Login</button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
