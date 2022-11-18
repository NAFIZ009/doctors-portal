import React from 'react';
import AppointmentPart from './Component/AppointmentPart.js/AppointmentPart';
import Banner from './Component/Banner/Banner';
import ContactUs from './Component/ContactUs/ContactUs';
import OurServices from './Component/Our Services/OurServices';
import SecBanner from './Component/SecBanner/SecBanner';
import Testimonial from './Component/Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SecBanner></SecBanner>
            <OurServices></OurServices>
            <AppointmentPart></AppointmentPart>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;