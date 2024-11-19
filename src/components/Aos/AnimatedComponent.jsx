import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

const AnimatedComponent = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className='flex items-center justify-center'>
            <div className="text-white bg-accent shadow-2xl p-10 m-5 rounded-lg w-full h-96" data-aos="fade-right">
                <h2 className='text-4xl font-bold text-center'>Our Partners</h2>
                <p className='py-20 text-center'>We collaborate with leading organizations to provide diverse opportunities, helping you connect with companies aligned to your career goals.</p>
            </div>
            <div className="text-white bg-accent shadow-2xl p-10 m-5 rounded-lg w-full h-96" data-aos="fade-left">
            <h2 className='text-4xl font-bold text-center'>Portal Job</h2>
            <p className='py-20 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className="text-white bg-accent shadow-2xl p-10 m-5 rounded-lg w-full h-96" data-aos="fade-down">
            <h2 className='text-4xl font-bold text-center'>Careers Coaching</h2>
            <p className='py-20 text-center'>Our expert career coaches guide you through resume building, interview preparation, and skill development, empowering your career advancement effectively.</p>
            </div>
        </div>
    );
};

export default AnimatedComponent;
