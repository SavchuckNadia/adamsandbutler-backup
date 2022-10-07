import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperInterface } from 'swiper'

// Import Swiper styles
import "swiper/css";
import "./ExperienceCarousel.scss";
import "./FooterCarousel.scss"

// import required modules


import FooterCarouselSlide from "../Footer/FooterCarousel/FooterCarouselSlide";
import { IFooterSlide, IExperienceSlide } from "../../data/carousel/interface";
import JourneyCarouselSlide from "../../pages/Home/components/ExperienceCarouselSlide/ExperienceCarouselSlide";


interface CarouselProps {
  type: string,
  options: any,
  slides: Array<IFooterSlide | IExperienceSlide>
}


export default function Carousel(props: CarouselProps) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperInterface>();

  return (
    <>
      <div className={`wrap-carousel-${props.type}`}>
        <Swiper
          onSwiper={setSwiperInstance}
          {...props.options}
        >
          {props.slides.map((slide: any) => (
            <SwiperSlide key={slide.id}>
              {props.type === 'experience' &&
                <JourneyCarouselSlide slide={slide} />
              }

              {props.type === 'footer' &&
                <FooterCarouselSlide slide={slide} />
              }
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={`wrap-nav-${props.type}`}>
          <div
            className={`swiper-${props.type}-button-prev`}
            tabIndex={0}
            role="button"
            aria-label="Previous slide"
          ></div>
          <div
            className={`swiper-${props.type}-button-next`}
            tabIndex={0}
            role="button"
            aria-label="Next slide"
          ></div>
        </div>
      </div>
    </>
  );
}
