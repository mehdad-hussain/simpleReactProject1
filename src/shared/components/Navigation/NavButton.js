const NavButton = (props) => {
  return (
    <button
      className='navbar-toggler'
      data-bs-toggle='collapse'
      data-bs-target='#main-nav'
      onClick={props.click}
    >
      <span className='navbar-toggler-icon nav-links-button'></span>
    </button>
  );
};

export default NavButton;
