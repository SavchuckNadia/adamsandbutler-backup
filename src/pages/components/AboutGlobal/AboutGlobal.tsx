import { Link } from "react-router-dom"
import styles from "./AboutGlobal.module.scss"
import bigImg from "../../../assets/img/home/about_global/about_square_bigger@2x-800x800.jpeg"
import smallImg from "../../../assets/img/home/about_global/about_square_smaller@2x.jpeg"

const AboutGlobal = () => {
    return (
        <section className={styles.about_global}>
            <div className={styles.wrap_about_content}>
                <div className={styles.wrap_image}>
                    <div className={styles.image}>
                        <img src={bigImg}  alt="" />
                    </div>
                </div>
                <div className={styles.wrap_text_and_image}>
                    <h4 className={styles.small_title}>Made to measure</h4>
                    <h2 className={styles.second_heading}>
                        We are Experience
                        <br />
                        Designers
                    </h2>
                    <div className={styles.wrap_inner_image_and_text}>
                        <div className={styles.wrap_image}>
                            <div className={styles.image}>
                                <img src={smallImg} alt="" />
                            </div>
                        </div>
                        <div className={styles.wrap_text_and_link}>
                            <p className={styles.paragraph_style}>
                                Our team of highly experienced travel designers will guide you from beginning to end as you embark on a tailor-made journey of distinction, enjoying truly exclusive and authentic cultural experiences. We can fulfil your bucket-list dreams.
                            </p>
                            <Link className={styles.link_to} to="/contact-us">
                                Speak to us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutGlobal
