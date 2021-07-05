import { Link } from "react-router-dom";
import React, { useState } from "react";

import Header from "./Header";
import NavLinks from "./NavLinks";
import NavButton from "./NavButton";
import SideDrawer from "./SideDrawer";
import BackDrop from "../UIElements/Backdrop";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerState] = useState(false);

  const openDrawerHandler = () => {
    setDrawerState(true);
  };

  const closeDrawerHandler = () => {
    setDrawerState((v) => !v); // Instead of false using this expression (v) => !v
  };

  // const transition = useTransition(drawerIsOpen, {
  //   form: { transform: "translateX(-100%)", opacity: 0 },
  //   enter: { transform: "translateX(0%)", opacity: 0 },
  //   leave: { transform: "translateX(-100%)", opacity: 0 },
  //   config: { duration: 200 },
  //   // delay: 200,
  //   // config: config.molasses,
  //   // openDrawerHandler: () => setDrawerState(true),
  // });

  return (
    <React.Fragment>
      {/* {drawerIsOpen && <BackDrop click={closeDrawerHandler} />} */}
      {/* {transition(
        (style, item) =>
          item && (
            <>
              <BackDrop click={closeDrawerHandler} />
              <animated.SideDrawer
                style={{ ...style }}
                click={closeDrawerHandler}
              >
                <nav className='h-100'>
                  <h2>It's a Side Drawer</h2>
                  <NavLinks color='gray-900' />
                </nav>
              </animated.SideDrawer>
            </>
          )
      )} */}

      <SideDrawer click={closeDrawerHandler} state={drawerIsOpen}>
        <nav className='h-100'>
          <h2>It's a Side Drawer</h2>
          <NavLinks color='gray-900' />
        </nav>
      </SideDrawer>

      {/* Here we used shortHand ternary expression */}
      <Header>
        <nav className='navbar navbar-expand-sm navbar-dark bg-blue-300 shadow'>
          <NavButton click={openDrawerHandler} />
          <Link to='/' className='navbar-brand font-5x font-w-700 ms-2'>
            Your Places
          </Link>
          <div className='collapse navbar-collapse' id=''>
            <NavLinks color='white' />
          </div>
        </nav>
      </Header>
    </React.Fragment>
  );
};

export default MainNavigation;
