// import "./Card.css";
const Card = (props) => {
  return (
    <div
      className={`card shadow br-5 m-0 bg-white overflow-hidden ${props.className}`}
      style={props.style}
    >
      {/* <div className='bg-blue-400 br-5 text-blue-900' style={props.style}> */}
      {props.children}
    </div>
  );
};

export default Card;
