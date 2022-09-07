import instagramIcon from "../assets/svg/footer/instagram-footer.svg";
import twitterIcon from "../assets/svg/footer/twitter-footer.svg";
import linkedInIcon from "../assets/svg/footer/linkedin-footer.svg";
import facebookIcon from "../assets/svg/footer/facebook-footer.svg";

import { v4 as uuidv4 } from 'uuid';

export const footerSocialLinks = [
  {
    id: 0,
    icon: facebookIcon,
    alt: "Facebook icon",
    path: "https://www.facebook.com/adamsandbutler/",
  },
  {
    id: 1,
    icon: twitterIcon,
    alt: "Twitter icon",
    path: "https://twitter.com/adamsandbutler?lang=en",
  },
  {
    id: 2,
    icon: instagramIcon,
    alt: "Instagram icon",
    path: "https://www.instagram.com/adamsandbutler/",
  },
  {
    id: 3,
    icon: linkedInIcon,
    alt: "LinkedIn icon",
    path: "https://www.linkedin.com/company/adams-&amp;-butler/",
  },
];

export const footerNavLinks = [
  {
    id: uuidv4(),
    title: "Tailored Experiences",
    navLinks: [
      {
        id: 0,
        name: "Adventure",
        path: "https://www.adamsandbutler.com/experience-type/adventure/",
      },
      {
        id: 1,
        name: "Celebration",
        path: "https://www.adamsandbutler.com/experience-type/celebration/",
      },
      {
        id: 2,
        name: "Culinary",
        path: "https://www.adamsandbutler.com/experience-type/culinary/",
      },
      {
        id: 3,
        name: "Family",
        path: "https://www.adamsandbutler.com/experience-type/family/",
      },
      {
        id: 4,
        name: "Ultraluxe",
        path: "https://www.adamsandbutler.com/experience-type/ultraluxe/",
      },
      {
        id: 5,
        name: "Voyages",
        path: "https://www.adamsandbutler.com/experience-type/voyages/",
      },
      {
        id: 6,
        name: "Speciality",
        path: "https://www.adamsandbutler.com/experience-type/speciality/",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Destinations",
    navLinks: [
      {
        id: 0,
        name: "Ireland",
        path: "https://www.adamsandbutler.com/destinations/ireland/",
      },
      {
        id: 1,
        name: "UK",
        path: "https://www.adamsandbutler.com/destinations/uk/",
      },
      {
        id: 2,
        name: "Africa",
        path: "https://www.adamsandbutler.com/destinations/africa/",
      },
      {
        id: 3,
        name: "Classic Europe",
        path: "https://www.adamsandbutler.com/destinations/classic-europe/",
      },
      {
        id: 4,
        name: "Asia",
        path: "https://www.adamsandbutler.com/destinations/asia/",
      },
      {
        id: 5,
        name: "The Americas",
        path: "https://www.adamsandbutler.com/destinations/the-americas/",
      },
      {
        id: 6,
        name: "Exotic Islands",
        path: "https://www.adamsandbutler.com/destinations/exotic-islands/",
      },
      {
        id: 7,
        name: "Polar Regions",
        path: "https://www.adamsandbutler.com/destinations/polar-regions/",
      },
      {
        id: 8,
        name: "Oceania",
        path: "https://www.adamsandbutler.com/destinations/oceania/",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Private rentals",
    navLinks: [
      {
        id: 0,
        name: "Castles",
        path: "https://www.adamsandbutler.com/private-rentals/?_single_private_rentals_sort_by_type=castle",
      },
      {
        id: 1,
        name: "Estates",
        path: "https://www.adamsandbutler.com/private-rentals/?_single_private_rentals_sort_by_type=estate",
      },
      {
        id: 2,
        name: "Villas & Houses",
        path: "https://www.adamsandbutler.com/private-rentals/?_single_private_rentals_sort_by_type=villas-houses",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "News & Press",
    navLinks: [
      {
        id: 0,
        name: "All",
        path: "https://www.adamsandbutler.com/news-and-press/",
      },
      {
        id: 1,
        name: "Press",
        path: "https://www.adamsandbutler.com/news-and-press/?_news_and_press_cat=ab-press",
      },
      {
        id: 2,
        name: "News",
        path: "https://www.adamsandbutler.com/news-and-press/?_news_and_press_cat=news",
      },
      {
        id: 3,
        name: "Newsletter",
        path: "https://www.adamsandbutler.com/news-and-press/?_news_and_press_cat=ab-newsletter",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "About us",
    navLinks: [
      {
        id: 0,
        name: "Why choose A&B",
        path: "https://www.adamsandbutler.com/about-us/#why-choose-us",
      },
      {
        id: 1,
        name: "Our Team",
        path: "https://www.adamsandbutler.com/about-us/#our-team",
      },
      {
        id: 2,
        name: "Work with us",
        path: "https://www.adamsandbutler.com/about-us/#work-with-us",
      },
    ],
  },
];
