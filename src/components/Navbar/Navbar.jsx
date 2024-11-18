import React from "react";
import "./Navbar.css";
import { CiCloudSun } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-base-200">
      <div className="w-11/12 mx-auto min-h-20  flex justify-between items-center">
        <div className="sm:flex sm:font-bold items-center text-sm sm:text-3xl text-accent">
          <CiCloudSun />
          LIFE COACH
        </div>
        <div className="flex sm:gap-3">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/profile" className="ml-6">
            My Profile
          </NavLink>
        </div>
        <div>
          <button className="btn btn-accent">Accent</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
