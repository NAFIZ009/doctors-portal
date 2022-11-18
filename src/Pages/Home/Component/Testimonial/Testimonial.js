import React from 'react';
import './Testimonial.css';
import people1 from '../../../../assets/images/people1.png';
import people2 from '../../../../assets/images/people2.png';
import people3 from '../../../../assets/images/people3.png';



const Testimonial = () => {
    return (
        <div className='min-h-[514px] my-20 w-10/12 mx-auto flex flex-col gap-10 tes-bg'>
            <div className="head">
            <span className='text-pri font-bold text-center'>Testimonial</span>
            <h1 className='text-sec text-4xl'>What Our Patients Says</h1>
            </div>

            <div className="testimonial parent-card mx-auto gap-y-4 gap-x-2">
            <div className="card   text-primary-content shadow-xl">
            <div className="card-body gap-6">
                <p className=''>If a dog chews shoes whose shoes does he choose?</p>
                <div className='flex items-center gap-2'>
                    <div className=''>
                    <img src={people1} className="w-16 rounded-full border-2 border-cyan-500" alt="" />
                    </div>
                    <div>
                        <span className='font-bold'>Winson Herry</span><br /><span className='text-sec'>California</span>
                    </div>
                </div>
            </div>
            </div>
            


            <div className="card   text-primary-content shadow-xl">
            <div className="card-body gap-6">
                <p className=''>If a dog chews shoes whose shoes does he choose?</p>
                <div className='flex items-center gap-2'>
                    <div className=''>
                    <img src={people2} className="w-16 rounded-full border-2 border-cyan-500" alt="" />
                    </div>
                    <div>
                        <span className='font-bold'>Winson Herry</span><br /><span className='text-sec'>California</span>
                    </div>
                </div>
            </div>
            </div>


            <div className="card   text-primary-content shadow-xl">
            <div className="card-body gap-6">
                <p className=''>If a dog chews shoes whose shoes does he choose?</p>
                <div className='flex items-center gap-2'>
                    <div className=''>
                    <img src={people3} className="w-16 rounded-full border-2 border-cyan-500" alt="" />
                    </div>
                    <div>
                        <span className='font-bold'>Winson Herry</span><br /><span className='text-sec'>California</span>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Testimonial;