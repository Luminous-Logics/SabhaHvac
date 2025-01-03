import React, { useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import '../src/scss/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
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
