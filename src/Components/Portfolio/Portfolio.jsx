import React, { useState } from 'react';
import './portfolio.css';
import showcase from './index';
import Popup from './PopUp/Popup';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to handle click event and set selectedProject
  const handleClick = (id) => {
    const project = showcase.find(item => item.id === id);
    setSelectedProject(project);
  };

  return (
    <section id='portfolio'>
      <div className='port--heading'>
        <h1>My Works</h1>
      </div>
      <div className='port--container'>
        {showcase.map(item => (
          <div className='port--main' key={item.id}>
            <div className='port--div' onClick={() => handleClick(item.id)}>
              <div className="image--container">
                <img src={item.img} alt={item.title} />
                <div className='work--intro'>{item.intro}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && <Popup project={selectedProject} onCancel={() => setSelectedProject(null)} />}
    </section>
  );
};

export default Portfolio;
