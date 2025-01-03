import React from "react";
import images from "../../assets/images";
import TabComponent from "../../components/TabComponent";
import ContactModal from "../../components/ContactModal";
import ScheduleServiceLink from '../../components/ScheduleServiceLink'; // Default import
import ScrollButton from "../../components/ScrollButton";
import BlogSwiper from "../../components/BlogSwipper";
import PhoneComponent from "../../components/PhoneComponent";

const Home = () => {
  const blogs = [
    {
      image: images.blog1,
      title: 'Top 5 Tips for Preparing Your HVAC System for Winter',
    },
    {
      image: images.blog2,
      title: 'How Smart Thermostats Save Money and Energy',
    },
    {
      image: images.blog3,
      title: "Signs It's Time to Replace Your Air Conditioner",
    },
    {
      image: images.blog4,
      title: 'The Benefits of Regular Duct Cleaning',
    },
  ];
  
  return (
    <>
      {/* Hero Section */}

      <section id="hero" className="hero section dark-background">
        <img src={images.heroimage} alt="sabah hvac" data-aos="fade-in" />
        <div className="container d-flex flex-column align-items-center mt-25">
          <p data-aos="fade-up" data-aos-delay="200">Best Climate Control Solutions in Kuwait</p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="mt-2 text-center">Shaping the Air You Deserve.</h2>
          <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
            <ScheduleServiceLink modalTarget="#contactModal">Schedule a Service</ScheduleServiceLink>
          </div>
        </div>
      </section>

      {/* Expert HVAC Solutions */}
      <section id="hvacsolutions" className="services-2 section light-background">
        
        <div className="container zin-dt">
          <div className="row">
            <p data-aos="fade-up" data-aos-delay="200">Experience the Future of Comfort</p>
            <div className="col-md-9 col-sm-12">
              <h2 data-aos="fade-up" data-aos-delay="200" className="mt-2 hvac-heading">Expert HVAC Solutions</h2>
            </div>
            <div className="col-md-3">
              <div className="service-btn mt-3">
              <ScheduleServiceLink modalTarget="#contactModal" className={"link-started"}>Schedule a Service</ScheduleServiceLink>
              </div>
            </div>
            <div className="service-box align-items-center mt-2" data-aos="fade-up" data-aos-delay="200">
              <ul>
                <li>
                  <p>✅ Custom HVAC Design</p>
                  <p>✅ Energy-Efficient Solutions</p>
                </li>
                <li>
                  <p>✅ 24/7 Emergency Services</p>
                  <p>✅ Certified Technicians You Can Trust</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item d-flex position-relative h-100 residential-ser">
                <div className="service-tittle">
                  <h4 className="title">Residential</h4>
                  <div className="service-iconbottom">
                    <i className="bi bi-arrow-right"></i>
                  </div>
                </div>
                <div className="service-details ">
                  <div className="card-service-details">
                    <div className="left-data">
                      <ul>
                        <li><p><b>Installation </b>Central air conditioning systems, ductless systems, heat pumps, and more.</p></li>
                        <li><p><b>Maintenance & Repairs</b> Regular servicing and on-call repair for all HVAC systems.</p></li>
                        <li><p><b>Energy Efficiency Upgrades</b> Retrofitting older systems with energy-efficient components. </p></li>
                      </ul>
                    </div>
                    <div className="right-data d-block">
                    <ScheduleServiceLink modalTarget="#contactModal" className={"btn-started"}>Schedule a Service</ScheduleServiceLink>                     
                     
                    </div>
                  </div>
                </div>
                <div className="hover-container">
                  <img src={images.ResidentialImage} alt="Residential" className="service-img image" />
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item d-flex position-relative h-100 residential-ser">
                <div className="service-tittle">
                  <h4 className="title">Commercial</h4>
                  <div className="service-iconbottom">
                    <i className="bi bi-arrow-right"></i>
                  </div>
                </div>
                <div className="service-details ">
                  <div className="card-service-details">
                    <div className="left-data">
                      <ul>
                        <li><p><b>Customized Systems </b> Designing and installing systems for offices, malls, restaurants, and more.</p></li>
                        <li><p><b>Industrial Ventilation</b> Creating tailored solutions for warehouses, factories, and plants.</p></li>
                        <li><p><b>Maintenance Contracts</b> Comprehensive contracts to keep your systems running smoothly.</p></li>
                      </ul>
                    </div>
                    <div className="right-data d-block">
                    <ScheduleServiceLink modalTarget="#contactModal" className={"btn-started"}>Schedule a Service</ScheduleServiceLink>                     
                    </div>
                  </div>
                </div>
                <div className="hover-container">
                  <img src={images.CommercialImage} alt="Commercial" className="service-img image"/>
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item d-flex position-relative h-100 residential-ser">
                <div className="service-tittle">
                  <div className="service-icontop">
                    <i className="bi bi-arrow-right"></i>
                  </div>
                  <h4 className="title data-bottom">Industrial</h4>
                </div>
                <div className="service-details ">
                  <div className="card-service-details">
                    <div className="left-data">
                    <ul>
                        <li><p><b>Large-Scale Systems</b> Installing and maintaining HVAC systems for industrial facilities.</p></li>
                        <li><p><b>Specialized Services</b> Process cooling, heating, and air quality management for specific industries.</p></li>
                      </ul>
                    </div>
                    <div className="right-data d-block">
                    <ScheduleServiceLink modalTarget="#contactModal" className={"btn-started"}>Schedule a Service</ScheduleServiceLink>                
                    </div>
                  </div>
                </div>
                <div className="hover-container">
                  <img src={images.IndustrialImage} alt="Industrial" className="service-img image"/>
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item d-flex position-relative h-100 residential-ser">
                <div className="service-tittle">
                  <div className="service-icontop"><i className="bi bi-arrow-right"></i></div>
                  <h4 className="title data-bottom">Consultancy</h4>
                </div>
                <div className="service-details ">
                  <div className="card-service-details">
                    <div className="left-data">
                    <ul>
                        <li><p><b>Expert advice </b>on selecting, upgrading or designing HVAC systems tailored to your needs.</p></li>
                        <li><p><b>Energy audits and sustainability</b> assessments for your HVAC systems.</p></li>
                      </ul>
                    </div>
                    <div className="right-data d-block">
                    <ScheduleServiceLink modalTarget="#contactModal" className={"btn-started"}>Schedule a Service</ScheduleServiceLink>                             
                    </div>
                  </div>
                </div>
                <div className="hover-container">
                  <img src={images.ConsultancyImage} alt="Consultancy"  className="service-img image"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={images.doodlebg} alt="doodle" className="doodle-bg" data-aos="zoom-in"/>
        <img src={images.spark} alt="spark doodle" className="spark" data-aos="zoom-out"/>
      </section>
      {/* Why Sabah? */}
      <section id="why-sabah" className="services-2 section light-background">
      <img src={images.doodlebg} alt="doodle" className="doodle-bg"/>
        <div className="container">
          <div className="row">
            <p data-aos="fade-up" data-aos-delay="200">Why Sabah?</p>
            <div className="col-md-9 col-sm-12 position-relative">
              <h2 data-aos="fade-up" data-aos-delay="200" className="mt-2 hvac-heading">Experience the Difference</h2>
              <p className="why-para" data-aos="fade-up" data-aos-delay="200">
                Sabah HVAC Solutions is a licensed HVAC service provider established to meet Kuwait’s growing demand for high-quality, reliable HVAC systems. With a vision for expansion into international markets, we are committed to delivering excellence
                in every project we undertake
              </p>
            </div>
            <div className="col-md-3">
                <PhoneComponent />
            </div>
          </div>
          <div className="row gy-4 mt-4">
            <div className="col-md-8 " data-aos="fade-up" data-aos-delay="300">
              <div className="sabah-box d-flex position-relative">
                <h1>Why Choose Us</h1>
                <div className="hover-absolute">
                  <img src={images.union} alt="union" className="service-img image" />
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="sabah-box position-relative d-flex align-items-end">
                <div className="hover-absolute-top">
                  <img src={images.team} alt="team" className="service-img image"/>
                </div>
                <div className="sabah-content">
                  <h5>Expert Team</h5>
                  <p className="wit-80">Decades of combined experience in HVAC design, installation,and maintenance</p>
                </div>
              </div>
            </div>
            <div className="col-md-3" data-aos="fade-up" data-aos-delay="300">
              <div className="sabah-box position-relative d-flex align-items-end">
                <div className="hover-absolute-top">
                  <img src={images.end} alt="End-to-End Solution" className="service-img image"/>
                </div>
                <div className="sabah-content">
                  <h5>End-to-End Solutions</h5>
                  <p>From installation to after-sales support, we cover all your HVAC needs</p>
                </div>
              </div>
            </div>
            <div className="col-md-3" data-aos="fade-up" data-aos-delay="300">
              <div className="sabah-box position-relative d-flex align-items-end">
                <div className="hover-absolute-top">
                  <img src={images.future} alt="Future-Ready" className="service-img image"/>
                </div>
                <div className="sabah-content">
                  <h5>Future-Ready</h5>
                  <p>Preparing for global trade and exports in HVAC products and services</p>
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="sabah-box position-relative d-flex align-items-end justify-content-start">
                <div className="hover-absolute-top">
                  <img src={images.customer} alt="Customer-Centric Approach" className="service-img image"/>
                </div>
                <div className="sabah-content">
                  <h5>Customer-Centric Approach</h5>
                  <p className="wit-80">Tailored services to meet unique customer requirements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Features Section --> */}
      <section id="features" className="features section">
        <div className="container">
          <div className="row">
            <p data-aos="fade-up" data-aos-delay="200">Our Complete HVAC Solutions</p>
            <div className="col-md-9 col-sm-12">
              <h2 data-aos="fade-up" data-aos-delay="200" className="mt-2 hvac-heading">Your Comfort, Our Expertise</h2>
              <p className="why-para" data-aos="fade-up" data-aos-delay="200">Explore our comprehensive services designed to keep your spaces comfortable, energy-efficient, and worry-free all year round. We’ve got you covered with solutions tailored to your needs.</p>
            </div>
            <div className="col-md-3">
            <PhoneComponent />
            </div>
          </div>
        </div>
        <TabComponent />
        <img src={images.doodlebg} alt="" className="doodle-bg" data-aos="zoom-in"/>

      </section>

      <section id="blogs" className="blogs section light-background">
        <div className="container">
          <div className="row">
            <p data-aos="fade-up" data-aos-delay="200">Blogs</p>
            <div className="col-md-9 col-sm-12">
              <h2 data-aos="fade-up" data-aos-delay="200" className="mt-2 hvac-heading">Experience the Difference</h2>
              <p className="why-para" data-aos="fade-up" data-aos-delay="200">Expert Advice, Seasonal Tips, and the Latest in HVAC Innovations to Keep You Comfortable</p>
            </div>
            <div className="col-md-3 align-content-center">
            <PhoneComponent />
            </div>
          </div>
        </div>

        <BlogSwiper blogs={blogs} />
        <img src={images.doodlebg} alt="doodle" className="doodle-bg" data-aos="zoom-in"/>

      </section>
      <ScrollButton />
      <ContactModal />
    </>
  );
};

export default Home;
