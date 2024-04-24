import React, { useState, useEffect } from 'react';
import data from './index';
import './testimonials.css';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
// import { AiOutlineArrowLeft } from "react-icons/ai";

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial((prevTestimonial) => (prevTestimonial + 1) % data.length);
    }, 5000); // Switch testimonial every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prevTestimonial) => (prevTestimonial + 1) % data.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prevTestimonial) => (prevTestimonial - 1 + data.length) % data.length);
  };

  return (
    <div id='testimonial'>
      <div className='review--container'>
        <div>
          <span>
            Review From Friends, Partners & Clients
          </span>
        </div>
      </div>
      <section key={data[currentTestimonial].id} className='testimonial--container'>
        <div className='test--grid'>
          <div className='testimonial'>
            <h5 className="client-name">{data[currentTestimonial].name}</h5>
            <p className="client-review">{data[currentTestimonial].review}</p>
          </div>
        </div>
        <div className='testimonial--navigation'>
          <button onClick={prevTestimonial}><AiOutlineArrowLeft /></button>
          <button onClick={nextTestimonial}><AiOutlineArrowRight /></button>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
