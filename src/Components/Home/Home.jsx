import React from 'react'
import './home.css'
import myImage from '../constants/stella.jpg';

import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
    });

  return (
    <section id='home'>
      <div className='home--container'>
        <div className='left--div'>
          <div data-aos="fade-up-left">
            <span>Hi, I am <span className='name'>Stella.</span></span>
            <p className='home--paragraph'>
              I help creator economy companies and influencers grow their business through content creation strategy and swoon-worthy storytelling.
            </p>
          </div>
          <div>
            <button className='button'>Let's have a chat</button>
          </div>
        </div>
        <div className='HomeImage' data-aos="fade-up-right"
     data-aos-duration="1000">
          <img className='my-image' src={myImage} alt="HomePhoto" />
        </div>
      </div>
    </section>
  )
}

export default Home