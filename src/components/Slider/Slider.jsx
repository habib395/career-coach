import React, { useEffect, useState } from "react";

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
    <div className="lg:w-10/12 mx-auto my-5">
      <div className="carousel w-full h-auto">
        <div
          id="slide1"
          className={`carousel-item relative w-full ${
            current === 1 ? "block" : "hidden"
          }`}
        >
          <img src="https://i.ibb.co.com/dGjkKMP/img-one.png" className="w-full" alt="Slide 1" />
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
          <img src="https://i.ibb.co.com/h9Tz5GC/img-two.png" className="w-full" alt="Slide 2" />
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
          <img src="https://i.ibb.co.com/KbYfsQF/img-three.png" className="w-full" alt="Slide 3" />
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
