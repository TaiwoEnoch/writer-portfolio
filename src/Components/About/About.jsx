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
              Hello, I'm Taiwo Enoch a highly skilled Software Developer specializing in JavaScript, React, Ruby, and Ruby on Rails. With an accelerated learning curve, I've gained 2 years' worth of experience in just 1 year, enabling me to excel in crafting robust web applications. My strength lies in thriving within collaborative environments, where I leverage my exceptional communication skills to consistently deliver outstanding results.

              My proficiency extends to backend development with Ruby, and I take pride in creating engaging user interfaces using JavaScript and React. My expertise covers the entire development lifecycle, from the initial concept to seamless deployment. I place a premium on producing clean, maintainable code, adhering strictly to best practices and embracing test-driven development principles.

              My adaptability shines through as I readily embrace agile methodologies, ensuring that I can meet evolving requirements and consistently deliver high-quality software solutions. I'm perpetually seeking fresh challenges and opportunities that allow me to combine my passion for acquiring new knowledge with my innate ability to solve complex problems. If you're interested in collaborating or have any inquiries, please feel free to reach out to me I'm eager to explore potential partnerships and answer any questions you may have!
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