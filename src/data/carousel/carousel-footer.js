import { Lazy, Navigation } from "swiper";

import AListImg from "../../assets/img/footer-carousel/a-list.svg";
import AboutLogoImg from "../../assets/img/footer-carousel/about_logo_list_5_2x.svg";
import FoundingMemberImg from "../../assets/img/footer-carousel/founding-member-badge-01-1-1.png";
import GreenAwardImg from "../../assets/img/footer-carousel/green_award_logo.svg";
import ItaaImg from "../../assets/img/footer-carousel/itaa_logo.svg";
import SelectLogoImg from "../../assets/img/footer-carousel//select_logo.svg";
import VirtuosoLogoImg from "../../assets/img/footer-carousel//virtuoso_logo_footer.svg";

export const carouselFooterSlides = [
  {
    id: "1",
    alt: "A list",
    img: AListImg,
  },
  {
    id: "2",
    alt: "About logo",
    img: AboutLogoImg,
  },
  {
    id: "3",
    alt: "Founding member badge",
    img: FoundingMemberImg,
  },
  {
    id: "4",
    alt: "Green award logo",
    img: GreenAwardImg,
  },
  {
    id: "5",
    alt: "Itaa logo",
    img: ItaaImg,
  },
  {
    id: "6",
    alt: "Select logo",
    img: SelectLogoImg,
  },
  {
    id: "7",
    alt: "Virtuoso logo",
    img: VirtuosoLogoImg,
  },
];

export const carouselFooterOptions = {
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 0,
  grabCursor: true,
  loop: true,
  speed: 500,
  observer: true,
  observeParents: true,
  lazy: true,
  navigation: {
    nextEl: ".swiper-footer-button-next",
    prevEl: ".swiper-footer-button-prev",
  },
  breakpoints: {
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
  },
  effect: "fade",
  modules: [Lazy, Navigation],
  className: "slider-footer",
};
