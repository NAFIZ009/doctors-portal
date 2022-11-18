import React from 'react';
import img from '../../../../assets/images/chair.png';
import './Banner.css'
const Banner = () => {
    return (
        <div>
        <div className="hero hero-bg h-[700px] content-center">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} className="sm:max-w-[75%] lg:max-w-[50%] rounded-lg shadow-2xl" alt='' />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary rounded-lg text-white font-bold" >Get Started</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Banner;