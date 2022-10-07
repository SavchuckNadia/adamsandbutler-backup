import { IFooterSlide } from '../../../data/carousel/interface'

interface FooterCarouselSlideProps {
    slide:IFooterSlide
}

const FooterCarouselSlide = ({slide}:FooterCarouselSlideProps) => {
    return (
        <div className="image">
            <img
                src={slide.img}
                alt={slide.alt}
                className="swiper-lazy"
            />
        </div>
    )
}

export default FooterCarouselSlide
