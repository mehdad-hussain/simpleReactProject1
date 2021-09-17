import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { loginContext } from "../../context/login_context";

import "./NavLinks.css";
const NavLinks = (props) => {
  const login = useContext(loginContext);

  return (
    <ul className='p-1 mt-1 navbar-nav ms-auto font-1x font-w-600'>
      <li className='nav-item me-5 nav-custom'>
        <NavLink to='/' exact className={`nav-link ps-1 text-${props.color}`}>
          All Users
        </NavLink>
      </li>
      {login.isLoggedIn && (
        <li className='nav-item me-5 nav-custom '>
          <NavLink
            to='/u1/places'
            className={`nav-link ps-1 text-${props.color}`}
          >
            My Places
          </NavLink>
        </li>
      )}
      {login.isLoggedIn && (
        <li className='nav-item me-5 nav-custom'>
          <NavLink
            to='/places/new'
            className={`nav-link ps-1 text-${props.color}`}
          >
            Add Place
          </NavLink>
        </li>
      )}
      {!login.isLoggedIn && (
        <li className='nav-item me-5 nav-custom'>
          <NavLink to='/auth' className={`nav-link ps-1 text-${props.color}`}>
            Sign Up
          </NavLink>
        </li>
      )}
      {login.isLoggedIn && (
        <li>
          <button
            className='font-w-600 border-1 py-2 px-3 mr-5 border-[#d6d6d6] hover:bg-[#d6d6d6]'
            onClick={login.logout}
          >
            Logout
          </button>
        </li>
      )}
    </ul>
    // <ul className='mt-1 navbar-nav ms-auto font-1x font-w-600'>
    //   <li className='nav-item me-5 nav-custom'>
    //     <NavLink to='/' exact className='nav-link ps-1'>
    //       All Users
    //     </NavLink>
    //   </li>
    //   <li className='nav-item me-5 nav-custom'>
    //     <NavLink to='/u1/places' className='nav-link ps-1'>
    //       My Places
    //     </NavLink>
    //   </li>
    //   <li className='nav-item me-5 nav-custom'>
    //     <NavLink to='/places/new' className='nav-link ps-1'>
    //       Add Place
    //     </NavLink>
    //   </li>
    //   <li className='nav-item me-5 nav-custom'>
    //     <NavLink to='/auth' className='nav-link ps-1'>
    //       Sign Up
    //     </NavLink>
    //   </li>
    // </ul>
  );
};

export default NavLinks;
