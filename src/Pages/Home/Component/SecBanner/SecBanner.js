import React from 'react';
import './SecBanner.css';
import {CiClock2} from 'react-icons/ci';
import {ImLocation} from 'react-icons/im';
import {FiPhoneCall} from 'react-icons/fi';
const SecBanner = () => {
    return (
        <div className='parent-card mx-auto gap-y-4 gap-x-2'>
            <div className='border flex flex-col sm:flex-row justify-center content-center py-5 px-2  gap-2 bg-pri rounded-xl text-white'>
            <div className='flex flex-none sm:flex-[1_1_30%] items-center p-0 m-0 justify-center'>
            <CiClock2 className='text-7xl text-bolder text-white'></CiClock2>
            </div>
            <div className="flex flex-col justify-center">
                <h1 className='font-bold text-lg'>Opening Hours</h1>
                <p className='text-sm'>
                Lorem ipsum dolor sit amet conse, adipisicing elit.
                </p>
            </div>
            </div>


            <div className='border flex flex-col sm:flex-row justify-center content-center py-5 px-2  gap-2 bg-sec rounded-xl text-white'>
            <div className='flex flex-none sm:flex-[1_1_30%] items-center p-0 m-0 justify-center'>
            <ImLocation className='text-7xl text-white'></ImLocation>
            </div>
            <div className="flex flex-col justify-center">
            <h1 className='font-bold text-lg'>Visit Our Location</h1>
            <p className='text-sm'>
            Lorem ipsum dolor sit amet conse, adipisicing elit.
            </p>
            </div>
            </div>


            <div className='border flex flex-col sm:flex-row justify-center content-center py-5 px-2  gap-2 bg-pri rounded-xl text-white'>
            <div className='flex flex-none sm:flex-[1_1_30%] items-center p-0 m-0 justify-center'>
            <FiPhoneCall className='text-7xl text-bolder text-white'></FiPhoneCall>
            </div>
            <div className="flex flex-col justify-center flex-none sm:flex-[1_1_70%]">
                <h1 className='font-bold text-lg'>Contact Us Now</h1>
                <p className='text-sm'>
                01923891041
                </p>
            </div>
            </div>
        </div>
    );
};

export default SecBanner;