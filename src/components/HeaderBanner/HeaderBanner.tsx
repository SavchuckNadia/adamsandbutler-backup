import { Link, useLocation  } from "react-router-dom";
import styles from "./HeaderBanner.module.scss";
import ArrowIcon from "../../assets/svg/arrow.svg";
import HeroImg from "../../assets/img/home/hero_home_image.jpeg";
import { logoIcons } from "../../data/headerBannerLogo";
import virtuosoMemberLogo from "../../assets/svg/header-banner-logo/virtuoso_member_logo_hero.svg";
import SideBar from "../SideBar/SideBar";
import FormChatWithUs from "../FormChatWithUs/FormChatWithUs";
import SignInForm from "../SignInForm/SignInForm";
import { useEffect } from "react";
import { useUserAuth } from "../../context/auth/UserAuthContext";

export default function HeaderBanner() {
  const { logOut, user, isAdmin } = useUserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const location = useLocation();
  const homeRoute = location.pathname.endsWith('/')

  useEffect(() => {
    console.log('homeRoute', homeRoute);

  }, [homeRoute])



  return (
    <>
    
    { homeRoute && <>
      <div className={styles.wrapper}>
        <section className={styles.hero_home}>
          <div
            className={`${styles.wrap_fullscreen_video} ${styles.desktop_only}`}
          >
            <video
              id="background-video"
              width="100%"
              height="100%"
              playsInline
              muted
              autoPlay
              loop
            >
              <source
                src="https://www.adamsandbutler.com/app/uploads/2020/08/Web-Hero-Vid-V2-No-Sound-copy.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div
            className={`${styles.wrap_fullscreen_image} ${styles.mobile_only}`}
          >
            <div className={styles.image}>
              <img src={HeroImg} alt="Hero banner" />
            </div>
          </div>
          <div className={styles.dark_overlay_hero}></div>
          <div className={styles.wrap_hero_header}>
            <h3 className={styles.big_title_home}>Adams &amp; Butler</h3>
            <h1 className={styles.secondary_heading}>
              Hallmark of Luxury Travel
            </h1>
            <div className={styles.wrap_hero_links}>
              <Link to="/experiences">
                <span className={styles.text}>Our experiences</span>
                <span className={styles.arrow}>
                  <img src={ArrowIcon} alt="Arrow icon" />
                </span>
              </Link>

              <Link to="/plan-your-journey">
                <span className={styles.text}>Plan your journey</span>
                <span className={styles.arrow}>
                  <img src={ArrowIcon} alt="Arrow icon" />
                </span>
              </Link>
            </div>
          </div>

          <div className={styles.wrap_logo_hero}>
            {logoIcons.map((icon) => (
              <div
                key={icon.id}
                className={styles.image}
                style={{ width: icon.width }}
              >
                <img src={icon.icon} alt={icon.alt} />
              </div>
            ))}
          </div>

          <div className={styles.wrap_logo_left}>
            <div className={styles.image}>
              <a
                href="https://www.virtuoso.com/member/adamsbutler/travel "
                target="_blank"
                rel="noreferrer"
              >
                <img src={virtuosoMemberLogo} alt="Virtuoso member logo" />
              </a>
            </div>
          </div>

          <div className={styles.wrap_logo_hero_mobile}>
            {logoIcons.map((icon) => (
              <div
                key={icon.id}
                className={styles.image}
                style={{ width: icon.width }}
              >
                <img src={icon.icon} alt={icon.alt} />
              </div>
            ))}
          </div>
        </section>
      </div>

      <SideBar title="Have a chat with our team" titleSidebarBtn="Chat with us" btnClassName="speak_to_team" >
        <FormChatWithUs />
      </SideBar>


      {!user && <SideBar title="Sign In" titleSidebarBtn="Sign In" btnClassName="sign_in">
        <SignInForm />
      </SideBar>}

      {user && <button onClick={handleLogout} className={`${styles.sidebar_btn} ${styles.logout_btn}`}>Logout</button>
      }

      {isAdmin && <Link to='/admin' className={`${styles.sidebar_btn} ${styles.admin_btn}`}>Admin</Link>
      }
    </>}
    
    </>
  );
}
