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
    setDrawerState(false); // Instead of false using this expression (v) => !v for toggling
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <BackDrop click={closeDrawerHandler} />}

      <SideDrawer click={closeDrawerHandler} state={drawerIsOpen}>
        <nav className='h-100'>
          <h2>It's a Side Drawer</h2>
          <NavLinks color='gray-900' />
        </nav>
      </SideDrawer>

      <Header>
        <nav className='bg-blue-300 shadow navbar navbar-expand-md navbar-dark'>
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
