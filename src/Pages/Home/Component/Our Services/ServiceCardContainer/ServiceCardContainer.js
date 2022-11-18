import React from 'react';
import {CiMedicalCase} from 'react-icons/ci';
const ServiceCardContainer = () => {
    return (
        <div className='parent-card mx-auto gap-y-4 gap-x-2 my-10'>

            <div className="card w-96 text-primary-content shadow-xl">
            <div className='flex justify-center text-9xl text-pri'><CiMedicalCase></CiMedicalCase></div>
            <div className="card-body ">
                <h2 className="text-center font-bold text-xl">Fluoride Treatment</h2>
                <p className='text-center'>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            </div>
            


            <div className="card w-96  text-primary-content shadow-xl">
            <div className='flex justify-center text-9xl text-pri'><CiMedicalCase></CiMedicalCase></div>
            <div className="card-body ">
                <h2 className="text-center font-bold text-xl">Cavity Filling</h2>
                <p className='text-center'>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            </div>


            <div className="card w-96  text-primary-content shadow-xl">
            <div className='flex justify-center text-9xl text-pri'><CiMedicalCase></CiMedicalCase></div>
            <div className="card-body ">
                <h2 className="text-center font-bold text-xl">Teeth Whitening</h2>
                <p className='text-center'>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            </div>

        </div>
    );
};

export default ServiceCardContainer;