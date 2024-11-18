import React from "react";
import { useLoaderData } from "react-router-dom";
import Servey from "../Servey/Servey";
import Servicess from "../Servicess/Servicess";
import { Helmet } from "react-helmet-async";

const About = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
        <Helmet>
            <title>About | LIFE COACH</title>
        </Helmet>
      <h2 className="text-2xl text-center py-10">
        <p className="text-3xl font-bold text-accent">Our approach</p>
        to life coaching
      </h2>
      <h6 className="text-lg text-center py-3">
        Coaches have the ability to view things from afar - in what some call
        helicopter vision - and to <br></br> shed new light on difficult
        situations. Often they can act as a sounding board through tough{" "}
        <br></br> decisions, help sharpen skills, and motivate.
      </h6>
      <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-10">
        {services.map((service) => (
          <Servey service={service}></Servey>
        ))}
      </div>

      <h2 className="text-2xl text-center py-10">
        <p className="text-3xl font-bold text-accent"> Dedicated to your</p>
        life improvement.
      </h2>
      <h6 className="text-lg text-center py-3">
        Working one-on-one with a certified Life Coach can help you identify and attain your biggest goals.<br></br> Our private coaching clients experience significant breakthroughs that lead them to challenge their thinking, resulting in remarkable changes in their <br></br> careers, relationships and quality of life.
      </h6>
      <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-10">
        {services.map((servicess) => (
          <Servicess servicess={servicess}></Servicess>
        ))}
      </div>
        
    </div>
  );
};

export default About;
