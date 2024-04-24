import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

import './contact.css';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { target } = e;

    try {
      await emailjs.sendForm(
        'service_57i5icy',
        'template_n9fjqe7',
        target,
        'vM42l9I5NAfsr4M0d',
      );
      setSuccessMessage('Your message has been sent!');
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      setErrorMessage('Oops! Something went wrong. Please try again later.');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  };

  return (
    <section className="form-container" id='contact'>
        <form className="main--form" onSubmit={handleSubmit} ref={formRef}>
          <div className='main--container'>
            <div>
              <motion.h1 className='title'>
                Get in Touch with Stella!
              </motion.h1>
              <motion.p className='subtitle'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, doloribus quia. Corporis voluptate fugit facilis iure sapiente, totam ipsam dolorem dolor eius eligendi mollitia magni deserunt quis ex distinctio dolorum inventore cumque voluptatem quibusdam blanditiis. Deserunt aliquid necessitatibus, obcaecati odit cupiditate architecto soluta tempore quo natus illum amet accusamus excepturi.
              </motion.p>
            </div>
            <div className='input--container'>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
              <div className='form'>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className='input'
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  required
                  className='input'
                />
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Your message"
                  maxLength="500"
                  name="message"
                  className='input textarea'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                
              </div>
              <button
                  type="submit"
                  className='btn_container'
                >
                  Send Message
                </button>
            </div>
          </div>
        </form>
    </section>
  );
};

export default Contact;
