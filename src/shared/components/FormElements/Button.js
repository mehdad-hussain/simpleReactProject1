import { Link } from "react-router-dom";

const Button = (props) => {
  if (props.href) {
    return (
      <a
        href={props.href}
        className={`btn btn-${props.color} m-${props.m} p-${props.p} px-${
          props.px
        } py-${props.py} font-${props.font} rounded-${props.rounded} border-${
          props.border
        }  ${props.shadow && "shadow-lg"}`}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    <Link
      className={`btn btn-${props.color} m-${props.m} p-${props.p} px-${
        props.px
      } py-${props.py} font-${props.font} rounded-${props.rounded} border-${
        props.border
      } ${props.shadow && "shadow-lg"}`}
      to={props.to}
      exact={props.exact}
    >
      {props.children}
    </Link>;
  }
  return (
    <>
      <button
        className={`btn btn-${props.color} m-${props.m} p-${props.p} px-${
          props.px
        } py-${props.py} font-${props.font} rounded-${props.rounded} border-${
          props.border
        } ${props.shadow && "shadow-lg"}`}
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
