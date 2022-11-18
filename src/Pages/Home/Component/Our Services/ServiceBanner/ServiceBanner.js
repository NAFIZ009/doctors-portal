import React from 'react';
import img from '../../../../../assets/images/treatment.png';
const ServiceBanner = () => {
    return (
        <div>
        <div className="hero bg-base-200 my-28" style={{background:'none'}}>
        <div className="hero-content max-w-5xl gap-28 flex-col lg:flex-row">
          <img src={img} className="sm:max-w-[75%] lg:max-w-[50%] rounded-lg shadow-2xl" alt=''/>
          <div>
            <h1 className="text-5xl text-sec font-bold">Exceptional Dental Care,On Your Terms</h1>
            <p className="py-6 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <button className="btn btn-primary text-white rounded-lg">Get Started</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default ServiceBanner;