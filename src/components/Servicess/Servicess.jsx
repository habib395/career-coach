import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Servicess = ({servicess}) => {
    const { serviceName, image, pricing, counselor } =
    servicess;
    return (
        <div className="card bg-base-100 border-2" data-aos="fade-down">
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
          <p>{counselor}</p>
        </div>
      </div>
    );
};

export default Servicess;