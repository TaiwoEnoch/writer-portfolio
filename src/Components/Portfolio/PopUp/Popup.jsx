import React, { useState, useEffect } from 'react';
import './Popup.css';

const Popup = ({ project, onCancel }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Store the state of the popup in local storage
  useEffect(() => {
    localStorage.setItem('popupVisible', isVisible ? 'true' : 'false');

    // Cleanup function to remove the stored state when component unmounts
    return () => {
      localStorage.removeItem('popupVisible');
    };
  }, [isVisible]);

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('popup__container')) {
      onCancel();
    }
  };

  return (
    <>
      {isVisible && (
        <div className='popup__backdrop' onClick={handleBackdropClick}>
          <section className='popup__container'>
            <div className='special-button-cancel'>
              <button className='popup--cancel' onClick={onCancel}>X</button>
            </div>
            
            <div className='popup--main--container'>
              <div className='pop--div'>
                <h1 className='popup--heading'>{project.title}</h1>
                <p className='popup--paragraph'>{project.briefContent}</p>
                <a href={project.live} className='popup--link'>Live</a>
              </div>
              <div className='popup--image'>
                <img src={project.img} alt="project" />
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Popup;