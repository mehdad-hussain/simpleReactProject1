const Button = (props) => {
  return (
    <>
      <button className={`btn btn-${props.color} m${props.m} p${props.p}`}>
        {props.children}
      </button>
    </>
  );
};

export default Button;
