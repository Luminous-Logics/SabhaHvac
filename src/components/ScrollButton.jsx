import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react'

const ScrollButton = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Track visibility based on scroll

  // Track the scroll position and footer visibility
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const footer = document.getElementById('contactus');
    const footerPosition = footer ? footer.offsetTop : 0;

    if (scrollPosition > 200 && scrollPosition < footerPosition - 60) {  // Adjust 60 for button height
      setIsFixed(true);
      setIsVisible(true);
    } else if (scrollPosition >= footerPosition - 60) {
      setIsFixed(false); // Stop the button from being fixed once the footer is reached
      setIsVisible(false); // Optionally hide the button when you reach the footer
    } else {
      setIsFixed(false);
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null; // Optionally hide button when near footer

  return (
    <button className={`scroll-button bg-white text-success d-flex justify-content-spacebetween ${isFixed ? 'fixed' : ''}`}    >
      <Icon icon="logos:whatsapp-icon" width="20" height="20" className='mr-4' />
      Talk to us on WhatsApp
    </button>
  );
};

export default ScrollButton;
