import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

const AnimatedComponent = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className='flex items-center justify-center'>
            <div className="text-white bg-accent p-10 m-5 rounded-lg w-full h-96" data-aos="fade-right">
                <h2>Box 1</h2>
            </div>
            <div className="text-white bg-accent p-10 m-5 rounded-lg w-full h-96" data-aos="fade-left">
                <h2>Box 2</h2>
            </div>
            <div className="text-white bg-accent p-10 m-5 rounded-lg w-full h-96" data-aos="fade-down">
                <h2>Box 3</h2>
            </div>
        </div>
    );
};

export default AnimatedComponent;
