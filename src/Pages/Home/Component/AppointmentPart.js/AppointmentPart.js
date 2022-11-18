import React from 'react';
import img from '../../../../assets/images/doctor-small.png';
import './Appoinment.css';
const AppointmentPart = () => {
    return (
        <div className='h-[533px] bg '>
        <div className="hero h-full grid-none " >
        <div className="hero-content h-full max-w-5xl gap-28 flex-col lg:flex-row  p-0">
          <div className='hidden lg:block  relative h-full w-full flex-[1_1_50%]'>
          <img src={img} className="max-w-2xl absolute bottom-0 right-[-110px]" alt=''/>
          </div>
          <div className='flex items-center flex-none lg:flex-[1_1_50%] lg:px-0 '>
            <div className='px-2'>
            <span className='text-pri font-bold text-center'>Appointment</span>
            <h1 className="text-5xl font-bold text-white">Make An Appointment Today</h1>
            <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <button className="btn btn-primary rounded-lg text-white font-bold">Get Started</button>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default AppointmentPart;