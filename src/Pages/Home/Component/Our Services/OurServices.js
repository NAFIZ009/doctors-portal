import React from 'react';
import ServiceBanner from './ServiceBanner/ServiceBanner';
import ServiceCardContainer from './ServiceCardContainer/ServiceCardContainer';

const OurServices = () => {
    return (
        <div className='mt-20'>
            <div className="headline flex flex-col justify-center">
                <span className='text-pri font-bold text-center'>OUR SERVICES</span>
                <span className='text-4xl text-center text-black'>Service We Provide</span>
            </div>
            <ServiceCardContainer></ServiceCardContainer>
            <ServiceBanner></ServiceBanner>
        </div>
    );
};

export default OurServices;