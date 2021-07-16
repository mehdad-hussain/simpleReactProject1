import React, { useCallback, useReducer } from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATE_MINLENGTH,
  VALIDATE_REQUIRE,
} from "../../shared/util/validators";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formISValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formISValid = formISValid && action.isValid;
        } else {
          formISValid = formISValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formISValid,
      };
    default:
      return state;
  }
};

//  <!-- NewPlace COMPONENT -->
const NewPlace = (props) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);
  //  <!-- As we are using onInput as dependency in useEffect, it will create a new function object.Coz here I created a function in a function. This will lead to a infinite loop. So wrapping it with useCallback hook it will render once, as no dependency declared here. So if component function is re-rendered this function will stored, will not create nre function object.  -->
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form
      className='w-3/4 m-12 mx-auto shadow-lg h-3/4 lg:w-1/2'
      onSubmit={submitHandler}
    >
      <Input
        id='title'
        element='input'
        type='text'
        label='Title'
        errorText='Please enter a valid title.'
        validators={[VALIDATE_REQUIRE]}
        onInput={inputHandler}
      />
      <Input
        id='description'
        element='textarea'
        label='Description'
        errorText='Please enter a valid description(at least 5 characters).'
        validators={[VALIDATE_MINLENGTH(5)]}
        onInput={inputHandler}
      />
      <Input
        id='address'
        element='textarea'
        label='Address'
        errorText='Please enter a valid address.'
        validators={[VALIDATE_REQUIRE()]}
        onInput={inputHandler}
      />
      <Button
        p='p-2'
        m='m-3'
        color='btn-primary'
        type='submit'
        disabled={!formState.isValid}
      >
        Add Place
      </Button>
    </form>
  );
};

export default NewPlace;
