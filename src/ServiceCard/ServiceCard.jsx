import React from "react";

const ServiceCard = ({ service }) => {
  const {image, serviceName, category, pricing, counselorName} = service

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
        <p>{counselorName}</p>
        <div className="card-actions justify-end">
          <div className="btn btn-accent">Learn More</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
