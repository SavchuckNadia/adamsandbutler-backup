import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import closeIcon from "../../assets/svg/close-icon.svg";
import FormChatWithUs from "../FormChatWithUs/FormChatWithUs";
import "./SideBar.scss";

const options = {
  name: "Enable body scrolling",
  scroll: true,
  backdrop: false,
};

interface IOptions {
  name: string,
  scroll: boolean,
  backdrop: boolean,
}

function OffCanvas({ ...options }: IOptions) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((prevState) => !prevState);

  return (
    <>
      <button className="speak_to_team" onClick={toggleShow}>
        Chat with us
      </button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...options}
        className="wrap-enquiry"
      >
        <Offcanvas.Header>
          <Offcanvas.Title className="enquiry-title">
            Have a chat with our team
          </Offcanvas.Title>
          <div className="close-enquiry" onClick={handleClose}>
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
          <FormChatWithUs />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default function SideBar() {
  return (
    <>
      <OffCanvas {...options} />
    </>
  );
}
