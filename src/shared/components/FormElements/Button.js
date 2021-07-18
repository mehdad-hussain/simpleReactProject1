import { Link } from "react-router-dom";

const Button = (props) => {
  if (props.href) {
    return (
      <a href={props.href} className={`btn ${props.classes || ""}`}>
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        className={`btn ${props.classes || ""}`}
        to={props.to}
        exact={props.exact}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <>
      <button
        className={`btn ${props.classes || ""}`}
        type={props.type}
        onClick={props.click}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
