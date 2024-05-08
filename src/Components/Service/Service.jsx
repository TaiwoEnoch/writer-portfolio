import React from 'react';
import './services.css';
import service from './index';

const Service = () => {
  return (
    <section id='section--container'>
      <div className='service--title'>
        <h1>Services</h1>
      </div>
      <div className='map--container'>
        {service.map(item => (
          <div className="service-card" key={item.id}>
            <div className="image--container">
              <img src={item.image} alt="" />
              <div className="service--content">
                <h2>{item.intro[0].title}</h2>
                <p>{item.intro[0].desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Service;
