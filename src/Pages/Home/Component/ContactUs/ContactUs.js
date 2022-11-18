import React from 'react';

const ContactUs = () => {
    return (
        <div className='bg py-20'>
            <div className="heading mb-8">
            <span className='text-pri font-bold text-center block'>Testimonial</span>
            <h1 className='text-white text-center text-4xl'>What Our Patients Says</h1>
            </div>
            <form action="" className='flex px-5 flex-col justify-center items-center gap-4'>
            <input type="email" placeholder="Email Address" className="input w-full max-w-xs rounded-xl" />
            <input type="text" placeholder="Subject" className="input w-full max-w-xs rounded-xl" />
            <textarea className="textarea max-w-xs rounded-xl" placeholder="Your Message"></textarea>
            <button type='submit' className='btn btn-primary rounded-xl text-white'>Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;