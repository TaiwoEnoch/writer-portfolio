// In Home component
import React, { useState } from 'react';
import './home.css';
import PopupContact from '../PopupContact/PopupContact';
import myImage from '../constants/stella.jpg';

import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    AOS.init({
        duration: 500,
        easing: 'ease-in-out',
    });

    const [isPopupOpen, setPopupOpen] = useState(false);

    const togglePopup = () => {
        setPopupOpen(!isPopupOpen);
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
    };

    return (
        <section id='home'>
            <div className='home--container'>
                <div className='left--div' data-aos="fade-up-left">
                    <span>Hi, I am <span className='name'>Stella.</span></span>
                    <p className='home--paragraph'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat omnis quia ex cumque commodi provident sunt. Suscipit neque delectus dignissimos qui quo expedita ut ullam reprehenderit sunt repudiandae saepe excepturi nostrum libero ab, beatae enim accusantium commodi officia perspiciatis.
                    </p>
                    <button className='button' onClick={togglePopup}>Let's have a chat</button>
                    {isPopupOpen && <PopupContact onClose={handleClosePopup} />}
                </div>
                <div className='HomeImage'>
                    <img className='my-image' src={myImage} alt="HomePhoto" />
                </div>
            </div>
        </section>
    );
}

export default Home;
