import { carouselClientsSayOptions, carouselClientsSaySlides } from "../../data/carousel/carousel-clientsSay"
import Carousel from "../Carousel/Carousel"
import  "./ClientsSay.scss"

const ClientsSay = () => {
  return (
    <section className="clients-say-home">
        <h2 className="secondary_heading">What our clients say</h2>
        <Carousel type="clientsSay" slides={carouselClientsSaySlides} options={carouselClientsSayOptions}  />
    </section>
  )
}

export default ClientsSay