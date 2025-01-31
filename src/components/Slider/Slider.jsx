import React, { useEffect, useState } from "react";
import sliderImg from "../../../assets/one.png"
import sliderImg2 from "../../../assets/two.png"
import sliderImg3 from "../../../assets/three.png"


const Slider = () => {

  const [current, setCurrent] = useState(1)
  const total = 3

  useEffect(()=>{
      const interval = setInterval(()=>{
        setCurrent((prev)=>(prev === total ? 1 : prev + 1))
      },3000)

      return () => clearInterval(interval)
  }, [])


  return (
    <div>
      <div className="carousel w-full  max-h-96">
        <div
          id="slide1"
          className={`carousel-item relative w-full ${
            current === 1 ? "block" : "hidden"
          }`}
        >
          <img src={sliderImg} className="w-full" alt="Slide 1" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button
              className="btn btn-circle"
              onClick={() => setCurrent(total)}
            >
              ❮
            </button>
            <button
              className="btn btn-circle"
              onClick={() => setCurrent(2)}
            >
              ❯
            </button>
          </div>
        </div>





        <div
          id="slide2"
          className={`carousel-item relative w-full ${
            current === 2 ? "block" : "hidden"
          }`}
        >
          <img src={sliderImg2} className="w-full" alt="Slide 2" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button
              className="btn btn-circle"
              onClick={() => setCurrent(1)}
            >
              ❮
            </button>
            <button
              className="btn btn-circle"
              onClick={() => setCurrent(3)}
            >
              ❯
            </button>
          </div>
        </div>

        <div
          id="slide3"
          className={`carousel-item relative w-full ${
            current === 3 ? "block" : "hidden"
          }`}
        >
          <img src={sliderImg3} className="w-full" alt="Slide 3" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button
              className="btn btn-circle"
              onClick={() => setCurrent(2)}
            >
              ❮
            </button>
            <button
              className="btn btn-circle"
              onClick={() => setCurrent(1)}
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
