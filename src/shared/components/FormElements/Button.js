import { Link } from "react-router-dom";

const Button = (props) => {
  if (props.href) {
    return (
      <a
        href={props.href}
        className={`btn ${props.color || ""} ${props.m || ""} 
        ${props.p || ""} ${props.font || ""} ${props.rounded || ""}
        ${props.border || ""}  ${props.shadow || ""}`}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        className={`btn ${props.color || ""} ${props.m || ""} 
        ${props.p || ""} ${props.font || ""} ${props.rounded || ""} 
        ${props.border || ""} ${props.shadow || ""}`}
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
        className={`btn ${props.color || ""} ${props.m || ""} 
        ${props.p || ""} ${props.font || ""} ${props.rounded || ""} 
        ${props.border || ""} ${props.shadow || ""}`}
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
