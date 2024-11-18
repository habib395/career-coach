import React from 'react';
import Slider from '../components/Slider/Slider';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../serviceCard/serviceCard';


const Home = () => {
    const services = useLoaderData()
    // console.log(services)
    return (
        <div>
            <Slider></Slider>
            <div className='w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-10'>
                {
                    services.map(service => <ServiceCard service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Home;