import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo-white.svg";

const Footer = () => {
  return (
    <>
      <footer id="contactus" className="footer dark-background pb-4">
        <div className="container footer-top">
          <div className="col-md-12 my-4">
            <Link className="logo d-flex align-items-center">
              <img src={logo} alt="sabah hvac"/>
            </Link>
          </div>
          <div className="row gy-4">
            <div className="col-lg-6 col-md-6 footer-about">
              <div className="footer-contact pt-3">
                <h2>The Best HVAC Contracting Company in Kuwait!</h2>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 ">
              <div className="d-flex flex-column justify-content-between ">
                <div className="d-flex justify-content-start text-white">
                  <div className="justify-content-center d-flex align-items-center">
                    <Icon icon="mdi:phone" width="32" height="32" />
                  </div>
                  <div className="data-contact">
                    <p className=" mb-0">Contact Us</p>
                    <p>+965 6609 9477</p>
                  </div>
                </div>
                <div className="d-flex mt-4">
                  <div>
                    <Icon icon="heroicons:map-pin-16-solid"  width="32" height="32"/>
                  </div>
                  <div className="data-contact">
                    <p className="mb-1 contact-p">
                      Office No 9, Mezzanine Floor,Faisal Al Omar Complex, Al
                      Othman Street, Kuwait City, Hawally
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-12 footer-links">
              <p className="whatsup"><Icon icon="logos:whatsapp-icon" width="20" height="20" className='pr-1'/> Talk to us on WhatsApp</p>
              <ul>
              <li className="mt-4"><a className="dropdown-item" href="#hvacsolutions">Expert Solutions</a></li>
                <li><a  href="/#why-sabah">Why Sabah?</a></li>
                <li><a  href="/#features">Services</a></li>
                <li><a  href="/#blogs">Blog</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
