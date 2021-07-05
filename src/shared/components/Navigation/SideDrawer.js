// import './SideDrawer.css';
import ReactDOM from "react-dom";
import { useTransition, animated } from "react-spring";

const SideDrawer = (props) => {
  const myStyle = {
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: 100,
    // backgroundColor: "black",
  };

  const transition = useTransition(props.state, {
    form: { transform: "translateX(-100%)", opacity: 0 },
    enter: { transform: "translateX(0%)", opacity: 0.5 },
    leave: { transform: "translateX(-100%)", opacity: 0 },
    config: { duration: 600 },
    // delay: 200,
    // config: config.molasses,
    // openDrawerHandler: () => setDrawerState(true),
  });

  const content = transition(
    (style, item) =>
      item && (
        <animated.aside
          className='bg-white h-100 w-70 shadow'
          style={{ ...style }}
          onClick={props.click}
        >
          {props.children}
        </animated.aside>
      )
  );

  // const content = (

  //   <aside
  //     className='bg-white h-100 w-70 shadow'
  //     style={myStyle}
  //     onClick={props.click}
  //   >
  //     {props.children}
  //   </aside>
  // );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
