import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperInterface } from 'swiper'

// Import Swiper styles
import "swiper/css";
import "./ExperienceCarousel.scss";
import "./FooterCarousel.scss"
import "./ClientsSayCarousel.scss"

// import required modules


import FooterCarouselSlide from "../Footer/FooterCarousel/FooterCarouselSlide";
import { IFooterSlide, IExperienceSlide, IClientsSaySlide } from "../../data/carousel/interface";
import JourneyCarouselSlide from "../../pages/Home/components/ExperienceCarouselSlide/ExperienceCarouselSlide";
import ClientsSayCarouselSlide from "../ClientsSay/ClientsSayCarousel/ClientsSayCarouselSlide";


interface CarouselProps {
  type: string,
  options: any,
  slides: Array<IFooterSlide | IExperienceSlide | IClientsSaySlide>
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

              {props.type === 'clientsSay' &&
                <ClientsSayCarouselSlide slide={slide} />
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
