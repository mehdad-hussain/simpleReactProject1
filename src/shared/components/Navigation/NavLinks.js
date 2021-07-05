import { NavLink } from "react-router-dom";

import "./NavLinks.css";
const NavLinks = (props) => {
  return (
    <ul className='navbar-nav ms-auto font-1x font-w-600 mt-1 p-1'>
      <li className='nav-item me-5 nav-custom'>
        <NavLink to='/' exact className={`nav-link ps-1 text-${props.color}`}>
          All Users
        </NavLink>
      </li>
      <li className='nav-item me-5 nav-custom '>
        <NavLink
          to='/u1/places'
          className={`nav-link ps-1 text-${props.color}`}
        >
          My Places
        </NavLink>
      </li>
      <li className='nav-item me-5 nav-custom'>
        <NavLink
          to='/places/new'
          className={`nav-link ps-1 text-${props.color}`}
        >
          Add Place
        </NavLink>
      </li>
      <li className='nav-item me-5 nav-custom'>
        <NavLink to='/auth' className={`nav-link ps-1 text-${props.color}`}>
          Sign Up
        </NavLink>
      </li>
    </ul>
    // <ul className='navbar-nav ms-auto font-1x font-w-600 mt-1'>
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
