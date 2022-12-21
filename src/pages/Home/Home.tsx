import styles from "./Home.module.scss";
import introHomeImg1 from "../../assets/img/home/home_section_img1.jpeg";
import introHomeImg2 from "../../assets/img/home/home-section_img2.jpeg";
import backgroundBottomImg from "../../assets/img/home/home_bottom_image.jpeg";

import Carousel from "../../components/Carousel/Carousel";

import AboutGlobal from "../components/AboutGlobal/AboutGlobal";
import { Link } from "react-router-dom";

import findOutMoreIcon from "../../assets/svg/find_out_more.svg"
import { newsList } from "../../data/Home/news";
import { destinationsList } from "../../data/Home/destinations";
import { carouselExperienceOptions } from "../../data/carousel/carousel-experience";
import ClientsSay from "../../components/ClientsSay/ClientsSay";
import SignUp from "../../components/SignUp/SignUp";
import { useEffect, useState } from "react";
import {IExperienceSlide} from "../../interfaces/IExperienceSlide"
import { getData } from "../../services/data";



export default function Home() {
const [experienceSlides, setExperienceSlides] = useState(Array<IExperienceSlide>)

// Replace in separate file

// useEffect(() => {
//   const unsub = onSnapshot(
//     collection(db, "home_experience-carousel"),
//     (snapshot) => {
//       let list:Array<IExperienceSlide> = [];
//       snapshot.docs.forEach((doc) => {
        
//         list.push({ id: doc.id, ...doc.data() } as IExperienceSlide);
//       });
//       setExperienceSlides(list);
//     },
//     (error) => {
//       console.log(error);
//     }
//   );

//   return () => {
//     unsub();
//   };
// }, []);


useEffect(() => {
getData("home_experience-carousel",setExperienceSlides, setExperienceSlides)
}, [])

  return (
    <main>
      <div className={styles.wrapper}>
        <section className={styles.intro_home}>
          <div className={styles.intro_container}>
            <div className={styles.wrap_image_portrait}>
              <div className={styles.image}>
                <img src={introHomeImg1} alt="" />
              </div>
            </div>
            <div className={styles.wrap_text_and_landscape}>
              <h2 className={`secondary_heading`}>
                Magical memories, <br /> Bespoke experiences
              </h2>
              <p className={`paragraph_style`}>
                Once you have travelled the voyage never ends. Adams & Butler
                will open a world of wonders and create magical memories that
                will stay with you far beyond your travels.
                <br />
                <br />
                Diverge from the typical tourist destinations in favour of
                unique, authentic experiences. Experiences designed in the most
                inspiring surroundings that will be yours, and yours only.
                Journeys that create memorable moments and Adams & Butler’s
                bespoke itineraries will make this happen. The wonders of the
                world are within your reach.
              </p>
              <a
                className={`link_to`}
                href="https://www.adamsandbutler.com/about-us/#our-team"
              >
                Meet our team
              </a>
              <div className={styles.image}>
                <img src={introHomeImg2} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.experiences_home}>
          <div className={styles.background_color_overlay}></div>
          <div className={styles.wrap_text}>
            <div className={styles.title_wrap}>
              <h2 className={`secondary_heading`}>Tailor Made Journeys</h2>
            </div>

            <div className={styles.text_wrap}>
              <p className={`paragraph_style`}>
                A&amp;B design itineraries for our clients that others simply
                cannot, whether around a theme or a private experience. Our team
                of highly experienced consultants listen, understand and then
                create a tailor-made journey for you. We believe that travel
                should not only enrich your perception, understanding, and
                appreciation of the World, but that it should also allow you to
                support the local communities you visit. We enable you to
                explore with purpose, enthusiasm, and a new-found appreciation
                for the art of travel. Experience diverse cultures; immerse
                yourself in authentic experiences; take back the moment and
                reconnect with a joyous attitude towards life.{" "}
              </p>
              <a
                className={`link_to`}
                href="https://www.adamsandbutler.com/experiences/"
              >
                Our experiences
              </a>
            </div>
          </div>

          <div className={styles.wrap_carousel}>
            <div className={styles.wrap_inner_carousel}>
              <Carousel options={carouselExperienceOptions} type="experience" 
              slides={experienceSlides}     
              />
            </div>
          </div>
        </section>

        <section className={styles.destinations_home}>
          <div className={styles.wrap_text}>
            <h2 className={`secondary_heading`}>Luxury Destinations</h2>

            <p className={`paragraph_style`}>
              Let Adams &amp; Butler open up a world of wonders and create magical memories that will stay with you far beyond your travels. Whatever your travel preference may be, whether you are looking for a cultural city break, a child friendly family holiday, unlimited adventure, a romantic getaway or just to escape and uncover, we are here to create a seamless experience while handcrafting your bespoke journey.
            </p>
          </div>
          <div className={styles.wrap_destinations_list}>
            {destinationsList.map(destination => (
              <a key={destination.id} href={destination.link} className={styles.destination_item}>
                <div className={styles.image}>
                  <img src={destination.img} alt="" />
                </div>
                <p className={styles.wrap_title}>
                  {destination.title}
                </p>
                <div className={styles.gradient_overlay}></div>
              </a>
            ))}
          </div>
        </section>

        <div className={styles.wrap_about_template_destinations}>
          <AboutGlobal />
        </div>

        <section className={styles.news_and_press_home}>
          <div className={styles.wrap_text}>
            <h2 className={`secondary_heading`}>News & Press</h2>
            <Link to="/news-and-press" className={`link_to ${styles.desktop_link_to}`} >View all</Link>
          </div>
          <div className={styles.wrap_news_row}>
            {newsList.map(news => (
              <a key={news.id} href={news.link} className={styles.news_item}>
                <div className={styles.image}>
                  <img src={news.img} alt="" />
                </div>
                <div className={styles.info}>
                  <button>
                    <img src={findOutMoreIcon} alt="" />
                  </button>
                  <p className={styles.category}>{news.category}</p>
                  <h5 className={styles.title}>{news.title}</h5>
                </div>
              </a>
            ))}
          </div>
          <Link to="/news-and-press" className={`link_to ${styles.mobile_link_to}`} >View all</Link>
        </section>

        <ClientsSay />
        <div className={styles.bottom_image}>
          <div className={styles.gradient_overlay}></div>
          <div className={styles.image}>
            <img src={backgroundBottomImg} alt="" />
          </div>
        </div>
        <SignUp />



      </div>
    </main>
  );
}




