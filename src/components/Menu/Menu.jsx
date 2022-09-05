import { Link} from "react-router-dom";
import LogoImg from "../../assets/svg/logo.svg";
import LogoDarkImg from "../../assets/svg/logo_black.svg";
import SearchImg from "../../assets/svg/search_light.svg";
import SearchDarkImg from "../../assets/svg/search_dark.svg";

import FavouriteImg from "../../assets/svg/favourite.svg";
import FavouriteDarkImg from "../../assets/svg/favourite_dark.svg";
import PhoneImg from "../../assets/svg/phone.svg";

import styles from "./Menu.module.scss";
import CustomLink from "../CustomLink";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import { linksData } from "../../data/links";


export default function Menu() {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.querySelector("#navbar").style.top = "0";
    } else {
      document.querySelector("#navbar").style.top = "-122px";
    }
  }

  return (
    <>
      <header className={styles.header}>
        {/* fixed */}
        <div id="navbar" className={`${styles.container_fixed_nav}`}>
          <Link to="/" className={styles.nav_link}>
            <img src={LogoDarkImg} alt="Logo" className={styles.logo} />
          </Link>
          <nav className="nav">
            <ul className={styles.nav_list}>
            {linksData.map(link => (<CustomLink key={link.id} to={link.path} className={styles.nav_link}>
                {link.name}
              </CustomLink>))}
            </ul>
          </nav>
          <div className={styles.right_hand_side}>
            <img
              src={SearchDarkImg}
              alt="Search icon"
              className={styles.search}
            />
            <button type="button" className={styles.wrap_wishlist_icon}>
              <CustomLink to="/your-wishlist">
                <img
                  src={FavouriteDarkImg}
                  alt="Favourite icon"
                  className={styles.wishlist_icon}
                />
                <span className={styles.wishlist_count}>0</span>
              </CustomLink>
            </button>
          </div>
        </div>

        {/* not fixed */}
        <div id="navbar" className={`${styles.container_not_fixed_nav}`}>
          <Link to="/">
            <img src={LogoImg} alt="Logo" className={styles.logo} />
          </Link>
          <nav className="nav">
            <ul className={styles.nav_list}>
            {linksData.map(link => (<CustomLink  key={link.id} to={link.path} className={styles.nav_link}>
                {link.name}
              </CustomLink>))}
            </ul>
          </nav>
          <div className={styles.right_hand_side}>
            <img src={SearchImg} alt="Search icon" className={styles.search} />
            <button type="button" className={styles.wrap_wishlist_icon}>
              <CustomLink to="/your-wishlist">
                <img
                  src={FavouriteImg}
                  alt="Favourite icon"
                  className={styles.wishlist_icon}
                />
                <span className={styles.wishlist_count}>0</span>
              </CustomLink>
            </button>
          </div>
        </div>

        {/* mobile */}

        <div className={styles.container_fixed_mobile_nav}>
          <div className={styles.left_hand_side}>
            <Link to="/contact-us">
              <img
                className={styles.phone_icon}
                src={PhoneImg}
                alt="Contact us"
              />
            </Link>

            <button type="button" className={styles.wrap_wishlist_icon}>
              <Link to="/your-wishlist">
                <img
                  src={FavouriteDarkImg}
                  alt="Favourite icon"
                  className={styles.wishlist_icon}
                />
                <span className={styles.wishlist_count}>0</span>
              </Link>
            </button>
          </div>

          <Link to="/" className={styles.nav_link}>
            <img src={LogoDarkImg} alt="Logo" className={styles.logo} />
          </Link>
          <div className={styles.right_hand_side}>
            <img
              src={SearchDarkImg}
              alt="Search icon"
              className={styles.search}
            />
            
<BurgerMenu />

          </div>
        </div>
      </header>
      {/* <div className="nav-overlay-mobile">
        <div className="wrap-nav-mobile"></div>
      </div> */}
      
    </>
  );
}
