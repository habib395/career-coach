import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceCard = ({ service }) => {
  const {id, image, serviceName, category, pricing, counselor} = service

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="card bg-base-100 border-2"data-aos="fade-right">
      <figure>
        <img className="w-full h-64"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {serviceName}
          <div className="badge badge-accent">{pricing}</div>
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
