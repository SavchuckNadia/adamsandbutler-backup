import { useRef } from "react";
import CustomLink from "../CustomLink";
import styles from "./BurgerMenu.module.scss";
import { linksMobileData, socialLinksData } from "../../data/links";

export default function BurgerMenu() {
  const MenuBtnRef = useRef<HTMLDivElement>(null);
  const MenuRef = useRef<HTMLDivElement>(null);

  const onHandleClick = () => {
    const li = document.getElementsByTagName("li");
    const liArr = Array.from(li);
    if (MenuBtnRef.current?.classList.contains(`${styles.active}`)) {
      liArr.forEach((link) => {
        link.classList.add(`${styles.fadeOut}`);
      });
      setTimeout(() => {
        MenuBtnRef.current?.classList.remove(`${styles.active}`);
        MenuRef.current?.classList.remove(`${styles.active}`);
        MenuRef.current?.classList.add(`${styles.hideMenu}`);
        MenuRef.current?.classList.remove(`${styles.hideMenu}`);
        liArr.forEach((link) => {
          link.classList.remove(`${styles.fadeOut}`);
        });
      }, 2000);
      return;
    }
    if (!MenuBtnRef.current?.classList.contains(`${styles.active}`)) {
      MenuBtnRef.current?.classList.add(`${styles.active}`);
      MenuRef.current?.classList.add(`${styles.active}`);
      liArr.forEach((link) => {
        link.classList.add(`${styles.fadeIn}`);
      });
      setTimeout(() => {
        liArr.forEach((link) => {
          link.classList.remove(`${styles.fadeIn}`);
        });
      }, 2000);
      return;
    }
  };
  const onLinkClick = () => {
    MenuRef.current?.classList.remove(`${styles.active}`);
    MenuBtnRef.current?.classList.remove(`${styles.active}`);

  };

  return (
    <>
      <div className={styles.burger_menu}>
        <div
          className={styles.menu_btn}
          id="menu_btn"
          ref={MenuBtnRef}
          onClick={onHandleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <div
        id="menu"
        ref={MenuRef}
        className={`${styles.nav_overlay_mobile} ${styles.menu}`}
      >
        <div className={`${styles.wrap_nav_mobile}`}>
          <nav className={styles.nav}>
            <ul className={styles.nav_list}>
              {linksMobileData.map((link) => (
                <CustomLink
                  key={link.id}
                  to={link.path}
                  className={styles.nav_link}
                  onClick={onLinkClick}
                >
                  {link.name}
                </CustomLink>
              ))}
            </ul>
          </nav>

          <div className={styles.wrap_nav_mobile_socials}>
            {socialLinksData.map((link) => (
              <a
                key={link.id}
                href={link.path}
                target="_blank"
                rel="noreferrer"
                onClick={onLinkClick}
              >
                <img src={link.icon} alt={link.alt} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
