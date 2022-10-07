const ExperienceCarouselSlide = ({slide}:any) => {
    return (
        <a href={slide.link}>
            <div className="image-container">
                <img src={slide.img} alt="" className="swiper-lazy" />
            </div>
            <div className="wrap-experience-info">
                <h5>{slide.info}</h5>
            </div>
            <div className="dark-overlay"></div>
            <div className="bottom-gradient"></div>
        </a>
    )
}

export default ExperienceCarouselSlide
