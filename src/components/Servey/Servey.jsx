import React from "react";
import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Servey = ({ service }) => {
  const { id, serviceName, category, pricing, rating } =
    service;
  return (
    <div className="card bg-base-100 border-2">
      <div className="card-body">
        <h2 className="card-title">
          {serviceName}
        </h2>
          <div className="badge badge-accent">{pricing}</div>
      <div className="badge badge-accent">
        {rating}
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
          <div className="badge badge-accent">{category}</div>
        <div className="card-actions justify-end">
          <NavLink to={`/details/${id}`}>
            <div className="btn btn-accent rounded-full"> View Details</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Servey;
