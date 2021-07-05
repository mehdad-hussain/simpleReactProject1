import React, { useState } from "react";
import { useTransition, animated, config } from "react-spring";
import ReactDOM from "react-dom";

const Transform = (props) => {
  const myStyle = {
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: 100,
    // backgroundColor: "black",
  };

  const [drawerIsOpen, setDrawerState] = useState(false);

  // const openDrawerHandler = () => {
  //   setDrawerState(true);
  // }; not necessary

  const closeDrawerHandler = () => {
    setDrawerState((v) => !v); // Instead of false using this expression
  };

  const transition = useTransition(drawerIsOpen, {
    from: { transform: "translateX(-100%)", opacity: 0 },
    enter: { transform: "translateX(0%)", opacity: 1 },
    leave: { transform: "translateX(-100%)", opacity: 0 },
    config: { duration: 2000 },
    // config: config.molasses,
    // openDrawerHandler: () => setDrawerState(true),
  });

  return (
    <React.Fragment>
      {transition((style, item) =>
        item ? (
          <animated.aside
            className='bg-white h-100 w-70 shadow'
            style={{ ...style }}
            onClick={closeDrawerHandler}
          >
            <nav className='h-100'>
              <h2>It's a Side Drawer</h2>
            </nav>
          </animated.aside>
        ) : (
          ""
        )
      )}

      {/* {drawerIsOpen && (
        <aside className='bg-white h-100 w-70 shadow' style={myStyle}>
          <nav className='h-100'>
            <h2>It's a Side Drawer</h2>
          </nav>
        </aside>
      )} */}

      <div className='d-flex justify-content-end'>
        <button className='btn btn-primary ' onClick={closeDrawerHandler}>
          Toggle Btn
        </button>
      </div>
    </React.Fragment>
  );
};

export default Transform;
