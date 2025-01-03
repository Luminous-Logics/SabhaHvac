import React from "react";
import { Icon } from "@iconify/react";

const PhoneComponent = () => {
  return (
    <div className="d-flex justify-content-end text-white" data-aos="zoom-in" data-aos-delay="200">
      <div className="justify-content-center d-flex align-items-center phone-ani pulsating">
        <Icon icon="mdi:phone" width="20" height="20" />
      </div>
      <div className="data-contact">
        <p className="mb-0">Contact Us</p>
        <p>+965 6609 9477</p>
      </div>
    </div>
  );
};

export default PhoneComponent;
