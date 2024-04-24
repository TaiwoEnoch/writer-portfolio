import React from 'react'
import Modal from './Modal';
import services from '../constants/index';

import './services.css';

const Services = () => {
  return (
    <section id='service'>
      <div>
      <h1 className='service-heading'>Services</h1>
      <div className='main--service'>
        {services.map(service => (
          <Modal
            key={service.id}
            title={service.title}
            image={service.image}
            headshot={service.headshot}
            description={service.description}
          />
        ))}
      </div>
      </div>
    </section>
  )
}

export default Services;