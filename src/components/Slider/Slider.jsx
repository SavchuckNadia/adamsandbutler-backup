import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.scss";

import AListImg from "../../assets/img/footer-carousel/a-list.svg";
import AboutLogoImg from "../../assets/img/footer-carousel/about_logo_list_5_2x.svg";
import FoundingMemberImg from "../../assets/img/footer-carousel/founding-member-badge-01-1-1.png";
import GreenAwardImg from "../../assets/img/footer-carousel/green_award_logo.svg";
import ItaaImg from "../../assets/img/footer-carousel/itaa_logo.svg";
import SelectLogoImg from "../../assets/img/footer-carousel//select_logo.svg";
import VirtuosoLogoImg from "../../assets/img/footer-carousel//virtuoso_logo_footer.svg";

// import required modules
import { Lazy, Navigation } from "swiper";

export default function Slider() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <div className="wrap-carousel-footer">
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={0}
          grabCursor={true}
          loop={true}
          speed={500}
          lazy={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            352: {
              slidesPerView: 3,
              spaceBetween: 55,
              centeredSlides: true,
            },
            759: {
              slidesPerView: 5,
              spaceBetween: 85,
              centeredSlides: true,
            },
          }}
          effect={"fade"}
          modules={[Lazy, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="image">
              <img src={AListImg} alt="A list" className="swiper-lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
              <img
                src={AboutLogoImg}
                alt="About logo"
                className="swiper-lazy"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
              <img
                src={FoundingMemberImg}
                alt="Founding member badge"
                className="swiper-lazy"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
              <img
                src={GreenAwardImg}
                alt="Green award logo"
                className="swiper-lazy"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
              <img src={ItaaImg} alt="Itaa logo" className="swiper-lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
              <img
                src={SelectLogoImg}
                alt="Select logo"
                className="swiper-lazy"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
              <img
                src={VirtuosoLogoImg}
                alt="Virtuoso logo"
                className="swiper-lazy"
              />
            </div>
          </SwiperSlide>
          <div className="wrap-nav">
            <div
              className="swiper-button-prev"
              tabIndex="0"
              role="button"
              aria-label="Previous slide"
            ></div>
            <div
              className="swiper-button-next"
              tabIndex="0"
              role="button"
              aria-label="Next slide"
            ></div>
          </div>
        </Swiper>
      </div>
    </>
  );
}
