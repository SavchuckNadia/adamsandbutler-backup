import { ReactNode, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import closeIcon from "../../assets/svg/close-icon.svg";
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

interface OffCanvasProps {
  title: string,
  titleSidebarBtn: string,
  btnClassName: string,
  options: IOptions,
  children: ReactNode
}

function OffCanvas(props: OffCanvasProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((prevState) => !prevState);

  return (
    <>
      <button className={`${props.btnClassName}`} onClick={toggleShow}>
        {props.titleSidebarBtn}
      </button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props.options}
        className="wrap-enquiry"
      >
        <Offcanvas.Header>
          <Offcanvas.Title className="enquiry-title">
            {props.title}
          </Offcanvas.Title>
          <div className="close-enquiry" onClick={handleClose}>
            Close
            <div className="wrap-icon-close">
              <img src={closeIcon} alt="Close icon" />
            </div>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {props.children}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


interface SideBarProps {
  children: any,
  title: string,
  titleSidebarBtn: string,
  btnClassName: string
}

export default function SideBar(props: SideBarProps) {
  return (
    <>
      <OffCanvas options={options} title={props.title} titleSidebarBtn={props.titleSidebarBtn} btnClassName={props.btnClassName} >
        {props.children}
      </OffCanvas>
    </>
  );
}
