import React, { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import logo from "../../../assets/images/logo-white.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle scroll to apply a sticky effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  // Close dropdown
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header id="header" className={`header d-flex align-items-center fixed-top ${isScrolled ? "scrolled" : ""}`}>
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        {/* Logo */}
        <a href="/" className="logo d-flex align-items-center me-auto">
          <img className="logo-main" src={logo} alt="Sabah Hvac"/>
        </a>
        {/* Navigation Menu */}
        <nav id="navmenu" className="navmenu">
          <div className="dropdown-center">
            {/* Toggle Dropdown */}
            <button className="btn btn-togg dropdown-toggle" type="button" onClick={toggleDropdown} aria-expanded={isDropdownOpen}>
              <Icon icon="ri:menu-fill" width="24" height="24" />              
            </button>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <ul className="dropdown-menu show">
                <Icon icon="iconamoon:close-thin" width="32" height="32" onClick={closeDropdown} className="text-white close-button"/>
                <li className="mt-4"><a className="dropdown-item" href="#hvacsolutions">Expert Solutions</a></li>
                <li><a className="dropdown-item" href="/#why-sabah">Why Sabah?</a></li>
                <li><a className="dropdown-item" href="/#features">Services</a></li>
                <li><a className="dropdown-item" href="/#blogs">Blog</a></li>
                <li><a className="dropdown-item" href="/#contactus">Contact Us</a>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
