import React, { useState } from 'react';

import './Modal.css';

const Modal = ({ title, image, headshot, description }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className='service--title'>{title}</h2>
        <img className='blogImg' src={image} alt="Service" />
        <p className='paragraph'>{showFullContent ? description : headshot}</p>
        <button className='see-btn' onClick={toggleContent}>
          {showFullContent ? 'See Less' : 'See More'}
        </button>
      </div>
    </div>
  );
};

export default Modal;