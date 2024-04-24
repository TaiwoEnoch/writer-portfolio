import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import Portfolio from './Components/Portfolio/Portfolio';
// import Blog from './Components/Blog/Blog';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
// import Popup from './Components/Portfolio/PopUp/Popup';
// import Modal from './Components/Modal/subModal';

// import 'animate.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

  

function App() {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 500,
  //     easing: 'ease-in-out',
  //   });
  //   // Refresh AOS whenever the component re-renders
  //   AOS.refresh();
  // }, []);

  
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Home />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Service />
        </div>
        <div>
          <Portfolio />
        </div>
        {/* <div>
          <Popup />
        </div> */}
        <div>
          <Testimonials />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </Router>
  );
}

export default App;
