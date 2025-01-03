import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const BlogSwiper = ({ blogs }) => {
  return (
    <div className="container mt-4">
      <Swiper
        modules={[Pagination, Navigation]}
        navigation={false}
        pagination={false}
        spaceBetween={15}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween:15,
          },
        }}
      >
        {blogs.map((blog, index) => (
          <SwiperSlide key={index}>
            <div className="member" data-aos="fade-up" data-aos-delay="300">
              <div className="pic">
                <img src={blog.image} alt={blog.title} className="img-fluid" />
              </div>
              <div className="member-info">
                <h4>{blog.title}</h4>
                <div className="social">
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogSwiper;
