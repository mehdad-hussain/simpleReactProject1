import { useReducer, useCallback } from "react";

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
    case "SET_DATA":
      return {
        inputs: action.inputs,
        isValid: action.formISValid,
      };
    default:
      return state;
  }
};

export const useForm = (initialInputs, initialFormValidity) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
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

  const setFormData = useCallback((inputData, formValidity) => {
    dispatch({
      type: "SET_DATA",
      inputs: inputData,
      formISValid: formValidity,
    });
  }, []);

  return [formState, inputHandler, setFormData];
};
