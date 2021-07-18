import ReactDOM from "react-dom";
const BackDrop = (props) => {
  const myStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 10,
  };

  const content = (
    <div
      className='bg-gray-900 opacity-80 w-100 h-100'
      onClick={props.click}
      style={myStyle}
    ></div>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("backdrop-hook")
  );
};

export default BackDrop;
