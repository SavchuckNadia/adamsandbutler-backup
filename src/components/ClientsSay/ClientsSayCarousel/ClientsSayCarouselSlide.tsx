import { IClientsSaySlide } from "../../../data/carousel/interface"
import QuoteLeftImg from "../../../assets/svg//quote-left.svg"
import QuoteRightImg from "../../../assets/svg//quote-right.svg"

interface ClientsSayCarouselSlideProps {
  slide: IClientsSaySlide
}

const ClientsSayCarouselSlide = ({ slide }: ClientsSayCarouselSlideProps) => {
  return (
    <blockquote className="wrap-quote-and-author quote-text-style">
      <div className="wrap-quote-top">
        <img src={QuoteLeftImg} alt="" />
      </div>
      {slide.text}
      <p className="quote-author">{slide.author}</p>
      <div className="wrap-quote-bottom">
       <img src={QuoteRightImg} alt="" />
      </div>
    </blockquote>
  )
}

export default ClientsSayCarouselSlide
