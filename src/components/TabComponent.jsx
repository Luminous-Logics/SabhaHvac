import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import images from "../assets/images";
import ScheduleServiceLink from "../components/ScheduleServiceLink"

const TabComponent = () => {
  const tabData = [
    {
      id: "air-conditioning-services",
      title: "AC",
      heading: "Air Conditioning Services",
      image: images.ac,
      subDetails: [
        {
          heading: "Central Air Conditioning Installation and Maintenance",
          content:
            "Expert installation of central AC systems for residential, commercial, and industrial spaces. Regular maintenance for system longevity and efficiency.",
        },
        {
          heading: "Ductless Mini-Split Systems",
          content:
            "Installation of energy-efficient ductless systems for flexible cooling solutions.",
        },
        {
          heading: "AC Repairs",
          content:
            "Comprehensive repair services for all makes and models of air conditioners.",
        },
        {
          heading: "AC Filter Replacement",
          content:
            "Regular filter cleaning and replacement for improved air quality and system efficiency.",
        },
      ],
    },
    {
      id: "pills-heating",
      title: "Heating",
      heading: "Heating Services",
      image: images.heating,
      subDetails: [
        {
          heading: "Furnace Installation and Maintenance",
          content:
            "Professional installation and servicing of gas, electric, and oil furnaces.",
        },
        {
          heading: "Heat Pump Services",
          content:
            "Installation and maintenance of energy-efficient heat pump systems.",
        },
        {
          heading: "Radiant Heating Solutions",
          content:
            "Custom installation of underfloor and wall-mounted radiant heating systems.",
        },
      ],
      
    },
    {
      id: "pills-ventilation",
      title: "Ventilation",
      heading: "Ventilation Services",
      image: images.ventilation,
      subDetails: [
        {
          heading: "Duct Cleaning and Sealing",
          content:
            "Comprehensive cleaning of HVAC ducts to enhance airflow and air quality. Sealing leaks to improve system efficiency.",
        },
        {
          heading: "Exhaust Fan Installation",
          content:
            "Installation of exhaust fans for kitchens, bathrooms, and industrial spaces",
        },
        {
          heading: "Indoor Air Quality Solutions",
          content:
            "Installation of air purifiers, humidifiers, and dehumidifiers.",
        },
        {
          heading: "Airflow Balancing",
          content:
            "Ensuring consistent and balanced airflow throughout your property",
        },
      ],
      
    },
    {
      id: "pills-hvac-Maintenance",
      title: "HVAC Maintenance",
      heading: "HVAC Maintenance Services",
      image: images.hvacsystem,
      subDetails: [
        {
          heading: "Preventive Maintenance Contracts",
          content:
            "Scheduled maintenance to avoid costly repairs and ensure system longevity.",
        },
        {
          heading: "Seasonal Tune-Ups",
          content:
            "Preparing your HVAC system for peak seasons with professional tune-ups.",
        },
        {
          heading: "Inspection and Diagnostics",
          content:"Detailed system diagnostics to identify and resolve issues proactively."
        }
      ],
    },
    {
      id: "pills-energy-efficiency",
      title: "Energy Efficiency",
      heading: "Energy Efficiency Services",
      image: images.heating,
      subDetails: [
        {
          heading: "Energy Audits",
          content:
            "Comprehensive assessments to optimize your HVAC system’s energy consumption.",
        },
        {
          heading: "System Upgrades",
          content: "Retrofitting existing systems with energy-efficient components.",
        },
        {
          heading: "Smart Thermostat Installation",
          content:"Enhance control and efficiency with cutting-edge smart thermostats."
        }
      ],
    },
    {
      id: "pills-specialized",
      title: "Duct Installation ",
      heading: "Duct Installation Services",
      image: images.heating,
      subDetails: [
        {
          heading: "Duct Installation",
          content:"Professional Installation",
        },
        {
          heading: "Chilled Water Systems",
          content: "Installation and servicing of chilled water systems for industrial cooling needs.",
        },
        {
          heading: "Refrigeration Systems",
          content:"Installation and repair of commercial refrigeration systems."
        },
        {
          heading: "Cooling Towers",
          content:"Installation, maintenance, and cleaning of industrial cooling towers."
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className="swiper-tabs-container container">
    

      {/* Swiper Content */}
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        navigation={false}
        onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
        initialSlide={activeTab}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3000, // Delay in milliseconds
          disableOnInteraction: false, // Keep autoplay active after user interaction
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {tabData.map((tab, index) => (
          <SwiperSlide key={index}>
            <div className={`tab-pane fade ${activeTab === index ? "active show" : ""}`} id={tab.id} role="tabpanel" aria-labelledby={`${tab.id}-tab`}>
              <div className="row">
                <div className="col-md-4">
                  <div className="feature-img" data-aos="fade-up" data-aos-delay="300" >
                    <img src={tab.image} alt="Sabah hvac" className="img-fluid" style={{borderRadius:'10px'}} />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="features-detail">
                    <h1 data-aos="fade-up" data-aos-delay="300">{tab.heading}</h1>
                    <div className="row">
                      {tab.subDetails.map((detail, i) => (
                        <div className="col-md-6" key={i}>
                          <div className="sub-details">
                            <h5 data-aos="fade-up" data-aos-delay="300">{detail.heading}</h5>
                            <p data-aos="fade-up" data-aos-delay="300">{detail.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
                      <ScheduleServiceLink modalTarget="#contactModal">Schedule a Service</ScheduleServiceLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

        {/* Tab Navigation */}
        <ul
        className="nav nav-pills mb-3 features-data mt-5 tab-services"
        id="pills-tab"
        role="tablist"
      >
        {tabData.map((tab, index) => (
          <li className="nav-item" role="presentation" key={tab.id}>
            <button
              className={`nav-link ${activeTab === index ? "active" : ""}`}
              id={`${tab.id}-tab`}
              data-bs-toggle="pill"
              data-bs-target={`#${tab.id}`}
              type="button"
              role="tab"
              aria-controls={tab.id}
              aria-selected={activeTab === index}
              onClick={() => {
                setActiveTab(index);
                if (swiperRef.current) swiperRef.current.slideTo(index);
              }}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabComponent;
