import React from "react";
import Slider from "../components/Slider/Slider";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../serviceCard/serviceCard";
import { Helmet } from "react-helmet-async";


const Home = () => {
  const services = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Home | LIFE COACH</title>
      </Helmet>
      <Slider></Slider>
      <h2 className="text-2xl text-center py-10">
        <p className="text-3xl font-bold text-accent">Our Services</p>
      </h2>
      <h6 className="text-lg text-center py-3">
        Coaches have the ability to view things from afar - in what some call
        helicopter vision - and to <br></br> shed new light on difficult
        situations. 
      </h6>
      <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-10 ">
        {services.map((service) => (
          <ServiceCard service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Home;



// new repo
// echo "# assignment-eight-first-life-used-ph" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/habib395/assignment-eight-first-life-used-ph.git
// git push -u origin main