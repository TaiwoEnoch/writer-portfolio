import React from 'react';
import Modal from './Modal';
import image from '../../assets/socials/twitter.png'; // Import your image

const App = () => {
  const modalContent = {
    short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    full: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ligula malesuada, commodo nisi ut, consequat est. Proin euismod magna nec dolor placerat tincidunt. Vivamus at est eu felis ullamcorper ullamcorper. Donec vel libero ac nulla tempor vestibulum. Nullam facilisis orci nec pharetra dapibus. Proin sit amet tempus elit. Integer vulputate vel nisi nec volutpat. Donec luctus rhoncus magna, non hendrerit velit rhoncus in. Morbi vitae nisi in magna vehicula convallis.'
  };

  return (
    <div>
      <h1>Modal Example</h1>
      <Modal
        title="Sample Modal"
        imageSrc={image}
        content={modalContent}
      />
    </div>
  );
};

export default App;
