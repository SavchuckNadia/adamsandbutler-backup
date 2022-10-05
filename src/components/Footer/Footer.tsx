import { footerNavLinks, footerSocialLinks } from "../../data/footerLinks";
import LogoImg from "../../assets/svg/footer-logo.svg";
import SquareLogoImg from "../../assets/svg/footer/square-logo.svg";
import LicencedImg from "../../assets/svg/footer/licenced_footer.svg";

import "./Footer.scss";
import Slider from "../Slider/Slider";

export default function Footer() {
  const navLinks = footerNavLinks;
  return (
    <footer>
      <section className="top-footer-slider">
        <Slider />
      </section>
      <div className="container">
        <div className="wrap-all-navs">
          {navLinks.map((navBlock) => (
            <div key={navBlock.id} className="wrap-single-footer-nav">
              <h4>{navBlock.title}</h4>
              <nav className="nav-footer">
                <div className="menu-footer-container">
                  <ul id="menu-footer" className="nav">
                    {navBlock.navLinks.map((navLink) => (
                      <li key={navLink.id} className="menu-item">
                        <a href={navLink.path}>{navLink.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
          ))}
        </div>
        <div className="wrap-infos-footer">
          <div className="logo-footer">
            <img src={LogoImg} alt="Logo" />
          </div>
          <a href="mailto:sales@adamsandbutler.com">sales@adamsandbutler.com</a>
          <a href="tel:1-800-894-5712">US Toll Free: 1-800-894-5712</a>
          <a href="tel:1-800-764-042">Australia Toll Free:1-800-764-042</a>
          <a href="tel:+353-1-288-9355">Ireland: +353-1-288-9355</a>
          <div className="wrap-footer-socials">
            {footerSocialLinks.map((link) => (
              <a
                href={link.path}
                target="_blank"
                rel="noreferrer"
                key={link.id}
              >
                <img src={link.icon} alt={link.alt} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="wrap-footer-bottom">
        <div className="wrap-licensed">
          <div className="image">
            <img src={LicencedImg} alt="Licenced" />
          </div>
          <span>
            Licenced by the Commission for Aviation Regulation, TA 0792
          </span>
        </div>
        <div className="wrap-all-legal">
          <div className="wrap-nav-legal">
            <nav className="nav-footer-legal">
              <div className="menu-footer-legal-container">
                <ul id="menu-footer-legal" className="nav">
                  <li className="menu-item">
                    <a href="https://www.adamsandbutler.com/terms-conditions/">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="https://www.adamsandbutler.com/sustainability-policy/">
                      Sustainability Policy
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="https://www.adamsandbutler.com/privacy-policy/">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
                <p className="copyright">Adams &amp; Butler ©2021</p>
              </div>
            </nav>
          </div>
          <div className="wrap-site-by">
            <span>Site by</span>
            <a href="https://kota.co.uk/" target="_blank" rel="noreferrer">
              <img src={SquareLogoImg} alt="Square logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
