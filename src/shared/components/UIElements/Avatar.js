// import "./Avatar.css";

const Avatar = (props) => {
  const avatar = {
    // width: "100%",
    // height: "100%",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  };

  const image = {
    // display: "block",
    // borderRadius: "60%",
    // width: "100%",
    // height: "100%",
    // objectFit: "cover",
  };

  return (
    // <div className={`avatar ${props.className}`} style={props.style}>
    <div
      className='d-flex justify-content-center align-items-center w-100 h-100'
      style={avatar}
    >
      <img
        src={props.image}
        alt={props.alt}
        // style={{ width: props.width, height: props.height }}
        style={image}
        className=' d-block img-fluid rounded-circle w-100 h-100'
      />
    </div>
  );
};

export default Avatar;
