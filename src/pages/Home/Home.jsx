import styles from "./Home.module.scss";
import introHomeImg1 from "../../assets/img/home/home_section_img1.jpeg";
import introHomeImg2 from "../../assets/img/home/home-section_img2.jpeg";
import Carousel from "../../components/Carousel/Carousel";

export default function Home() {
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
              <h2 className={styles.secondary_heading}>
                Magical memories, <br /> Bespoke experiences
              </h2>
              <p className={styles.paragraph_style}>
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
                className={styles.link_to}
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
              <h2 className={styles.secondary_heading}>Tailor Made Journeys</h2>
            </div>

            <div className={styles.text_wrap}>
              <p className={styles.paragraph_style}>
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
                className={styles.link_to}
                href="https://www.adamsandbutler.com/experiences/"
              >
                Our experiences
              </a>
            </div>
          </div>

          <div className={styles.wrap_carousel}>
            <div className={styles.wrap_inner_carousel}>

              {/* Swiper */}
              <Carousel />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
