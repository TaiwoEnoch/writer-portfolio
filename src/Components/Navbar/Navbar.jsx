import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineMenu } from 'react-icons/md';
import './Navbar.css';

import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  AOS.init({
    duration: 500,
    easing: 'ease-in-out',
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop,
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="navigation">
      <span className="logo">
        <Link to='/home' className='my-logo' onClick={() => scrollTo('home')}>
          Content
        </Link>
      </span>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul className='zoom'>
        <li>
            <Link to="/home" className='nav--links' onClick={() => scrollTo('home')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className='nav--links' onClick={() => scrollTo('about')}>
              About
            </Link>
          </li>
          <li>
            <Link to="/service" className='nav--links' onClick={() => scrollTo('service')}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className='nav--links' onClick={() => scrollTo('portfolio')}>
              Portfolio
            </Link>
          </li>
          {/* <li>
            <Link to="/blog" className='nav--links' onClick={() => scrollTo('blog')}>
              Blog
            </Link>
          </li> */}
          <li>
            <Link to="/testimonial" className='nav--links' onClick={() => scrollTo('testimonial')}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="/contact" className='nav--links' onClick={() => scrollTo('contact')}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <MdOutlineMenu />
      </div>
    </nav>
  );
};

export default Navbar;
