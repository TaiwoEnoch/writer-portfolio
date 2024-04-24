import React, { useState } from 'react';
import './Modal.css'; // Import your modal styles

const Modal = ({ title, imageSrc, content }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={toggleContent}>&times;</span>
        <h2>{title}</h2>
        <img src={imageSrc} alt="my name" />
        <p>{showFullContent ? content.full : content.short}</p>
        <button onClick={toggleContent}>
          {showFullContent ? 'See Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default Modal;
