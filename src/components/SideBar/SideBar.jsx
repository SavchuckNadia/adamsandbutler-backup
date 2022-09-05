import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import closeIcon from "../../assets/svg/close-icon.svg";
import TelDropdown from "../PhoneInput/PhoneInput";

import PhoneInputGfg from "../PhoneInput/PhoneInput";
import "./SideBar.scss";




const options = {
  name: "Enable body scrolling",
  scroll: true,
  backdrop: false,
};

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <button  className="speak_to_team" onClick={toggleShow}>Chat with us</button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        className="wrap-enquiry"
      >
        <Offcanvas.Header>
          <Offcanvas.Title className="enquiry-title">
            Have a chat with our team
          </Offcanvas.Title>
          <div className="close-enquiry " closeButton onClick={handleClose}>
            Close
            <div className="wrap-icon-close">
              <img src={closeIcon} alt="Close icon" />
            </div>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <section className="contact-details">
            <a href="tel:1-800-894-5712">US Toll Free: 1-800-894-5712</a>
            <a href="tel:1-800-764-042">Australia Toll Free:1-800-764-042</a>
            <a href="tel:+353-1-288-9355">Ireland: +353-1-288-9355</a>
          </section>
          <p className="subtitle">
            Or fill in the form below and we'll be in touch
          </p>
          <div className="wrap-form">
            <form className="user-form">
              <input
                name="firstName"
                id="firstName"
                type="text"
                value=""
                tabindex="1"
                placeholder="First Name"
                required
              />
              <input
                name="lastName"
                id="lastName"
                type="text"
                value=""
                tabindex="2"
                placeholder="Last Name"
                required
              />
              <input
                name="email"
                id="email"
                type="email"
                value=""
                tabindex="3"
                placeholder="Email"
                required
              />


              <PhoneInputGfg />

              <textarea name="place" id="place" tabindex="5" placeholder="Where would you like to go?"rows="10" cols="50" />
              <div className="input_container">
                <input name="signUp" id="signUpGetInspiration" type="checkbox" value="1" tabindex="6" />
                <label for="signUpGetInspiration">Sign up to receive travel inspiration, exclusive offers &amp; our latest news.</label>
              </div>
              <input type="submit" id="submit_button" className="submit_btn" value="Submit" tabindex="7" />
            </form>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default function SideBar() {
  return (
    <>
      <OffCanvasExample {...options} />
    </>
  );
}

