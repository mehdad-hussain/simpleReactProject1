import React, { useCallback, useReducer } from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATE_MINLENGTH,
  VALIDATE_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form_hook";

//  <!-- NewPlace COMPONENT -->
const NewPlace = (props) => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <div className='w-3/4 m-12 mx-auto bg-white rounded shadow-lg h-3/4 lg:w-1/2'>
      <div className='card-body'>
        <form className='' onSubmit={submitHandler}>
          <Input
            id='title'
            element='input'
            type='text'
            label='Title'
            errorText='Please enter a valid title.'
            validators={[VALIDATE_REQUIRE()]}
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
            classes='m-3 px-3 py-2 btn-primary'
            type='submit'
            disabled={!formState.isValid}
          >
            Add Place
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewPlace;
