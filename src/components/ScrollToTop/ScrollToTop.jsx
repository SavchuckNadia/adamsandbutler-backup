import { useEffect, useState } from "react";
import ArrowToTop from "../../assets/svg/arrow-to-top.svg";
import classes from "./ScrollToTop.module.scss";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        className={`${classes["scroll-top-button"]} ${
          showTopBtn && classes["show"]
        } `}
        onClick={goToTop}
      >
        <img src={ArrowToTop} alt="icon scroll to top" />
      </button>
    </>
  );
};

export default ScrollToTop;
