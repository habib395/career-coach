import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

const Aos = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])
    return (
        <div className='flex'>
            <div className="text-white bg-dark p-5 m-5" data-aos="fade-right">
                <h2>Box 1</h2>
            </div>
            <div className="text-white bg-dark p-5 m-5" data-aos="fade-left">
                <h2>Box 2</h2>
            </div>
            <div className="text-white bg-dark p-5 m-5" data-aos="fade-down">
                <h2>Box 3</h2>
            </div>
        </div>
    );
};

export default Aos;