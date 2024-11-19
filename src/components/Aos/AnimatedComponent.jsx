import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdOutlineGroups, MdOutlineWorkspacePremium } from "react-icons/md";
import { GrWorkshop } from 'react-icons/gr';

const AnimatedComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="sm:flex flex-cols items-center justify-center">
      <div
        className="text-white bg-accent shadow-2xl p-3 md:p-10 m-5 rounded-lg lg:w-full h-96"
        data-aos="fade-right"
      >
        <p className="text-5xl">
          <MdOutlineGroups />
        </p>

        <h2 className="text-xl lg:text-4xl font-bold text-center py-2">Our Partners</h2>
        <p className="lg:py-20 text-center">
          We collaborate with leading organizations to provide diverse
          opportunities, helping you connect with companies aligned to your
          career goals.
        </p>
      </div>
      <div
        className="text-white bg-accent shadow-2xl p-3 md:p-10 m-5 rounded-lg md:w-full h-96"
        data-aos="fade-left"
      >
        <p className="text-4xl lg:text-6xl">
        <MdOutlineWorkspacePremium />
        </p>
        <h2 className=" text-xl lg:text-4xl font-bold text-center py-2">Portal Job</h2>
        <p className="lg:py-20 text-center">
        Our job portal features thousands of opportunities, updated daily, ensuring access to roles suited for every career stage.
        </p>
      </div>
      <div
        className="text-white bg-accent shadow-2xl p-3 md:p-10 m-5 rounded-lg md:w-full h-96"
        data-aos="fade-down"
      >
        <p className="text-4xl lg:text-5xl">
        <GrWorkshop />
        </p>
        <h2 className="text-base lg:text-4xl font-bold text-center py-2">Careers Coaching</h2>
        <p className="lg:py-20 text-center">
          Our expert career coaches guide you through resume building, interview
          preparation, and skill development.
        </p>
      </div>
    </div>
  );
};

export default AnimatedComponent;
