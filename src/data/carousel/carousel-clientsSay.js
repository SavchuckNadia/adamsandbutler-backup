import { Navigation } from "swiper";

export const carouselClientsSaySlides = [
  {
    id: "1",
    text: 'This company is top notch! Our check in to all the hotels, as well as to the various venues we attended was like clockwork. Our guide was one of the most professional guides in the business and exceeded our expectations. She was extremely knowledgeable, courteous, prompt, and a pleasure to be with each day. Our friends asked us what was our favourite part of our trip, and we truthfully said, "All of it." This is due in part to being in such capable hands. We highly recommend this company.',
    author: "Elaine",
  },
  {
    id: "2",
    text: "Adams and Butler provided drivers who were both charming and knowledgeable hosts and great drivers on the (very) narrow roads of Ireland and Scotland. Our city accommodations were wonderful, and some of the countryside hotels were truly outstanding. Thanks to them we gained a true understanding of the culture and sites of Ireland and Scotland.",
    author: "Candy",
  },
  {
    id: "3",
    text: "It was a wonderful trip, we all loved Scotland, and Fiona! Thank you for everything, it was perfectly planned, and timed!!",
    author: "Lloyd Family",
  },
];

export const carouselClientsSayOptions = {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 0,
  grabCursor: true,
  loop: true,
  speed: 500,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: ".swiper-clientsSay-button-next",
    prevEl: ".swiper-clientsSay-button-prev",
  },
  modules: [Navigation],
  className: "clientsSaySwiper",
};
