import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";

import Backdrop from "./Backdrop";

const ModalOverlay = (props) => {
  const contentProps = useSpring({
    opacity: props.state ? 1 : 0,
    // marginTop: props.state ? -500 : -1000,
    // delay: 100, // fixed property need transform
    transform: props.state ? `translateY(0)` : `translateY(-10rem)`,
    transition: `all 100ms`,
  });

  const content = props.state && (
    <animated.div
      style={contentProps}
      className={`z-50 mt-8 fixed w-full  ${props.modalClass}`}
      id='myModal'
    >
      <div
        className={` modal-dialog
          modal-${props.modalSize}
          `}
      >
        <div className='modal-content'>
          <div className={`modal-header ${props.HeaderClass}`}>
            <h5 className='modal-title'>{props.modalTitle}</h5>
            <button
              type='button'
              class='btn-close'
              onClick={props.click}
            ></button>
          </div>
          <div
            className={`modal-body overflow-y-auto max-h-96 ${props.BodyClass}`}
          >
            {props.children}
          </div>
          <div className={`modal-footer ${props.footerClass}`}>
            {props.footer}
            <button
              className='p-2 m-2 btn btn-outline-primary'
              onClick={props.click}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </animated.div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <>
      {props.state && <Backdrop click={props.click} />}
      <ModalOverlay {...props} />
    </>
  );
};

export default Modal;
