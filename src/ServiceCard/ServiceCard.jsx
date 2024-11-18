import React from "react";
import { NavLink } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {id, image, serviceName, category, pricing, counselor} = service

  return (
    <div className="card bg-base-100 border-2">
      <figure>
        <img className="w-full h-64"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {serviceName}
          <div className="badge badge-secondary">{pricing}</div>
        </h2>
        <p>{category}</p>
        <p>{counselor}</p>
        <div className="card-actions justify-end">
          <NavLink to={`/details/${id}`}>
          <div className="btn btn-accent">Learn More</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
