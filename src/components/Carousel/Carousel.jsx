import {useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Img1 from "../../assets/img/home/carousel-img1.jpeg";
import Img2 from "../../assets/img/home/carousel-img2.jpeg";
import Img3 from "../../assets/img/home/carousel-img3.jpeg";
import Img4 from "../../assets/img/home/carousel-img4.jpeg";
import Img5 from "../../assets/img/home/carousel-img5.jpeg";
import Img6 from "../../assets/img/home/carousel-img6.jpeg";
import Img7 from "../../assets/img/home/carousel-img7.jpeg";
import Img8 from "../../assets/img/home/carousel-img8.jpeg";

// Import Swiper styles
import "swiper/css";
import "./Carousel.scss";

// import required modules
import { Lazy, Navigation } from "swiper";

export default function Carousel() {
  const [carouselRef, setCarouselRef] = useState(null);

  return (
    <>
      <div className="wrap-carousel">
        <Swiper
          onSwiper={setCarouselRef}
          slidesPerView={1.2}
          centeredSlides={false}
          spaceBetween={0}
          grabCursor={true}
          loop={true}
          speed={500}
          lazy={true}
          navigation={{
            nextEl: ".swiper-experiences-button-next",
            prevEl: ".swiper-experiences-button-prev",
          }}
          breakpoints={{
            760:{
                slidesPerView: 2.3
            },
            1023: {
              slidesPerView: 3.3
            },

          }}
          modules={[Lazy, Navigation]}
          className="experiencesSwiper"
        >
          <SwiperSlide>
            <a href="https://www.adamsandbutler.com/experiences/gorillas-in-the-mist-in-rwanda-gorilla-trekking/">
              <div className="image-container">
                <img src={Img1} alt="" className="swiper-lazy" />
              </div>
              <div className="wrap-experience-info">
                <h5>Gorillas in the Mist in Rwanda</h5>
              </div>
              <div className="dark-overlay"></div>
              <div className="bottom-gradient"></div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.adamsandbutler.com/experiences/quintessential-england/">
              <div className="image-container">
                <img src={Img2} alt="" className="swiper-lazy" />
              </div>
              <div className="wrap-experience-info">
                <h5>Quintessential England: From London to the Cotswolds</h5>
              </div>
              <div className="dark-overlay"></div>
              <div className="bottom-gradient"></div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.adamsandbutler.com/experiences/iceland-westfjords-self-drive-adventure/">
              <div className="image-container">
                <img src={Img3} alt="" className="swiper-lazy" />
              </div>
              <div className="wrap-experience-info">
                <h5>Iceland Westfjords – Self-drive adventure</h5>
              </div>
              <div className="dark-overlay"></div>
              <div className="bottom-gradient"></div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.adamsandbutler.com/experiences/strange-creatures-of-madagascar-south-africa/">
              <div className="image-container">
                <img src={Img4} alt="" className="swiper-lazy" />
              </div>
              <div className="wrap-experience-info">
                <h5>Strange Creatures of Madagascar &amp; South Africa</h5>
              </div>
              <div className="dark-overlay"></div>
              <div className="bottom-gradient"></div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.adamsandbutler.com/experiences/enchanting-namibian-safari-tour/">
              <div className="image-container">
                <img src={Img5} alt="" className="swiper-lazy" />
              </div>
              <div className="wrap-experience-info">
                <h5>Enchanting Namibia</h5>
              </div>
              <div className="dark-overlay"></div>
              <div className="bottom-gradient"></div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.adamsandbutler.com/experiences/gay-ireland/">
              <div className="image-container">
                <img src={Img6} alt="" className="swiper-lazy" />
              </div>
              <div className="wrap-experience-info">
                <h5>Gay Ireland</h5>
              </div>
              <div className="dark-overlay"></div>
              <div className="bottom-gradient"></div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.adamsandbutler.com/experiences/wild-romance-in-madagascar/">
              <div className="image-container">
                <img src={Img7} alt="" className="swiper-lazy" />
              </div>
              <div className="wrap-experience-info">
                <h5>Wild Romance in Madagascar</h5>
              </div>
              <div className="dark-overlay"></div>
              <div className="bottom-gradient"></div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.adamsandbutler.com/experiences/flavours-of-scotland/">
              <div className="image-container">
                <img src={Img8} alt="" className="swiper-lazy" />
              </div>
              <div className="wrap-experience-info">
                <h5>Flavours of Scotland</h5>
              </div>
              <div className="dark-overlay"></div>
              <div className="bottom-gradient"></div>
            </a>
          </SwiperSlide>
          <div className="wrap-nav">
            <div
              className="swiper-experiences-button-prev"
              tabIndex="0"
              role="button"
              aria-label="Previous slide"
            ></div>
            <div
              className="swiper-experiences-button-next"
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
