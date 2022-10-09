import { Lazy, Navigation } from "swiper";

import Img1 from "../../assets/img/home/carousel-img1.jpeg";
import Img2 from "../../assets/img/home/carousel-img2.jpeg";
import Img3 from "../../assets/img/home/carousel-img3.jpeg";
import Img4 from "../../assets/img/home/carousel-img4.jpeg";
import Img5 from "../../assets/img/home/carousel-img5.jpeg";
import Img6 from "../../assets/img/home/carousel-img6.jpeg";
import Img7 from "../../assets/img/home/carousel-img7.jpeg";
import Img8 from "../../assets/img/home/carousel-img8.jpeg";

export const carouselExperienceSlides = [
  {
    id: "1",
    link: "https://www.adamsandbutler.com/experiences/gorillas-in-the-mist-in-rwanda-gorilla-trekking/",
    img: Img1,
    info: "Gorillas in the Mist in Rwanda",
  },
  {
    id: "2",
    link: "https://www.adamsandbutler.com/experiences/quintessential-england/",
    img: Img2,
    info: "Quintessential England: From London to the Cotswolds",
  },
  {
    id: "3",
    link: "https://www.adamsandbutler.com/experiences/iceland-westfjords-self-drive-adventure/",
    img: Img3,
    info: "Iceland Westfjords – Self-drive adventure",
  },
  {
    id: "4",
    link: "https://www.adamsandbutler.com/experiences/strange-creatures-of-madagascar-south-africa/",
    img: Img4,
    info: "Strange Creatures of Madagascar &amp; South Africa",
  },
  {
    id: "5",
    link: "https://www.adamsandbutler.com/experiences/enchanting-namibian-safari-tour/",
    img: Img5,
    info: "Enchanting Namibia",
  },
  {
    id: "6",
    link: "https://www.adamsandbutler.com/experiences/gay-ireland//",
    img: Img6,
    info: "Gay Ireland",
  },
  {
    id: "7",
    link: "https://www.adamsandbutler.com/experiences/wild-romance-in-madagascar/",
    img: Img7,
    info: "Wild Romance in Madagascar",
  },
  {
    id: "8",
    link: "https://www.adamsandbutler.com/experiences/flavours-of-scotland/",
    img: Img8,
    info: "Flavours of Scotland",
  },
];

export const carouselExperienceOptions = {
  slidesPerView: 1.2,
  centeredSlides: false,
  spaceBetween: 0,
  grabCursor: true,
  loop: true,
  speed: 500,
  observer: true,
  observeParents: true,
  lazy: true,
  navigation: {
    nextEl: ".swiper-experience-button-next",
    prevEl: ".swiper-experience-button-prev",
  },
  breakpoints: {
    760: {
      slidesPerView: 2.3,
    },
    1023: {
      slidesPerView: 3.3,
    },
  },
  modules: [Lazy, Navigation],
  className: "experiencesSwiper",
};