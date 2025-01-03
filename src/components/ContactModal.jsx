import React from "react";
import images from "../assets/images";
import { Icon } from '@iconify/react'

const ContactModal = () => {
  return (
    <>
      {/* Modal */}
      <div className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body d-flex flex-wrap p-0">
            <button type="button" className="close button-close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
              {/* Left Section */}
              <div className="col-md-8 p-10">
                <h4 className="mb-2 primary-text">No Spamming!</h4>
                <h5 className="primary-text fs-2">Please leave your details</h5>
                <p className="mb-2 primary-text fs-2 cont-sub">We will be on your side soon :) </p>
                <form>
                  <div className="mb-3">
                    <input type="text" className="form-control border-radius-15" placeholder="Your Name*" required />
                  </div>
                  <div className="mb-3">
                    <input type="tel" className="form-control border-radius-15" placeholder="Contact number*"required/>
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control border-radius-15" placeholder="Email*" required />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control border-radius-15" rows="3" placeholder="Message"></textarea>
                  </div>
                  <button type="submit" className="btn bg-btn-primarycl w-100">
                    Submit <i className="bi bi-arrow-right"></i>
                  </button>
                </form>
              </div>

              {/* Right Section */}
              <div className="col-md-4 bg-primary text-white p-4 mob-hidden">
                <div>
                  <img className="logo-main" src={images.logo} alt="Sabah Hvac" />
                </div>
                <div className="d-flex flex-column justify-content-between mt-100">
                <div className="d-flex">
                    <div><Icon icon="heroicons:map-pin-16-solid" width="32" height="32" /></div>
                    <div className="data-contact">
                    <p className="mb-1 contact-p">Office No 9, Mezzanine Floor,Faisal Al Omar Complex, Al Othman Street, Kuwait City, Hawally</p>
                    </div>
                 
                </div>
                <div className="d-flex justify-content-start mt-4">
                <div><Icon icon="fluent:call-24-filled" width="32" height="32" /></div>
                    <div className="data-contact">
                    <p className=" mb-0">Contact Us</p>
                    <p>+965 6609 9477</p>
                    </div>
                </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactModal;
