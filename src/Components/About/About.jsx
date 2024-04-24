import React from 'react'
import stella from '../constants/stella.jpg';

import './about.css';

import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  AOS.init({
    duration: 500,
    easing: 'ease-in-out',
  });

  return (
    <section id='about'>
      <div className='header'>
        <h1 className='about--header' data-aos="zoom-in"
        data-aos-duration="400">Meet Stella</h1>
        <div className='about--container'>
          <div data-aos="zoom-in"
        data-aos-duration="500">
            <img className='about--image' src={stella} alt="" />
          </div>
          <div className='about--span' data-aos="fade-up"
        data-aos-duration="1000">
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque reiciendis voluptatibus qui quia inventore, 
              error sed, velit, adipisci maiores rem dicta voluptates odit animi similique aliquam? Molestias temporibus neque 
              perspiciatis, corporis amet tempora, sint, totam laborum quae fugiat magni perferendis voluptate culpa dolorem a 
              quibusdam expedita accusamus error tenetur accusantium repudiandae impedit eius eum non. Incidunt, illum itaque vero 
              repellat, quisquam corporis quidem corrupti officiis recusandae earum eos alias modi blanditiis non esse mollitia rem 
              inventore laudantium. Fuga quo in iusto rem! Quisquam veniam ipsa eveniet possimus ab accusamus repudiandae voluptates hic.
               Dolorum, quas veniam. Cupiditate, magnam. Facilis dolorem nobis temporibus delectus! Deserunt error consequuntur a eligendi 
               veritatis! Ducimus temporibus minus nisi unde? Ut ipsa minima iure ipsum eligendi iusto vero ea odio deleniti, eius porro 
               mollitia illo inventore optio iste totam cum quos veritatis? At non fugit fuga eaque voluptate ut quasi nemo, fugiat 
               mollitia. Ullam adipisci quibusdam harum!
            </span>
            <div>
              <button className='button btn-about'>Let's have a chat</button>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default About;