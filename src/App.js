import React, { useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import '../src/scss/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css'; // Import AOS styles
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import AOS from 'aos'; // Import AOS library

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once
    });

    const handleScroll = () => {
      if (window.scrollY > 0) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <AppRoutes />;
}

export default App;
