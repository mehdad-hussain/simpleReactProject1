import React, { useReducer, useEffect } from "react";

import { validate } from "../../util/validators";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

//  <!-- MAIN COMPONENT -->
const Input = (props) => {
  //  <!-- reducer for multiple states -->
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTouched: false,
    isValid: props.initialValid || false,
  });

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      // event.target.value not event.target.event !!!
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  //  <!-- useEffect for creating a callback function to parent child binding to validate full form  -->

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]); // if we use props & inputState as dependency, then it will create infinite loop

  //  <!-- ELEMENT CONSTANT FOR JSX -->
  const element =
    props.element === "input" ? (
      <input
        className={`w-full p-1 border-2 rounded focus:outline-none focus:ring-1 
        ${
          !inputState.isValid && inputState.isTouched
            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
            : "border-blue-500 focus:border-blue-500 focus:ring-blue-500"
        }`}
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        className={`w-full p-1 border-2 rounded focus:outline-none focus:ring-1 
        ${
          !inputState.isValid && inputState.isTouched
            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
            : "border-blue-500 focus:border-blue-500 focus:ring-blue-500"
        }`}
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div className='p-1 m-1'>
      <label className='block p-1 font-medium' htmlFor='props.id'>
        {props.label}
      </label>
      {element}
      {!inputState.isValid && inputState.isTouched && (
        <p className='m-1 text-red-500'>{props.errorText}</p>
      )}
    </div>
  );
};

export default Input;
