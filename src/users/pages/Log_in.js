import React, { useState, useContext } from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATE_EMAIL,
  VALIDATE_MINLENGTH,
  VALIDATE_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form_hook";
import { loginContext } from "../../shared/context/login_context";

const SignUp = (props) => {
  const login = useContext(loginContext);
  const [loginMode, setLoginMode] = useState(true);

  const [formState, inputHandler, setFromData] = useForm({
    email: {
      value: "",
      isValid: false,
    },
    password: {
      value: "",
      isValid: false,
    },
  });

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
    login.login();
  };

  const switchModeHandler = () => {
    if (!loginMode) {
      setFromData(
        {
          ...formState.inputs,
          name: undefined,
        },
        [formState.inputs.email.isValid && formState.inputs.password.isValid]
      );
    } else {
      setFromData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        [false]
      );
    }
    setLoginMode((p) => !p);
  };

  return (
    <div className='w-3/4 m-12 mx-auto bg-white rounded shadow-lg h-3/4 sm:w-1/2 md:w-1/2'>
      <div className='card-body'>
        <h4 className='p-3 text-center'>Login Required</h4>
        <hr />
        <form className='' onSubmit={submitHandler}>
          {!loginMode && (
            <Input
              id='name'
              element='input'
              type='text'
              label='Your Name'
              validators={[VALIDATE_REQUIRE()]}
              errorText='Please enter your name.'
              onInput={inputHandler}
            />
          )}
          <Input
            id='email'
            element='input'
            type='email'
            label='E-mail'
            validators={[VALIDATE_EMAIL()]}
            errorText='Please enter a valid email address.'
            onInput={inputHandler}
          />
          <Input
            id='password'
            element='input'
            type='password'
            label='Password'
            validators={[VALIDATE_MINLENGTH(8)]}
            errorText='Weak password (at least 8 characters).'
            onInput={inputHandler}
          />
          <div className='text-center'>
            <Button
              classes='m-3 px-5 py-2 btn-primary'
              type='submit'
              disabled={!formState.isValid}
            >
              {loginMode ? "Log in" : "Sign up"}
            </Button>
          </div>
          <div className='text-center'>
            <h5 className='text-yellow-800> '>Don't have an account?</h5>
            <Button
              click={switchModeHandler}
              classes='m-3 mx-auto w-2/4 py-2 btn-secondary'
            >
              Switch to {loginMode ? "Sign Up" : "Log in"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
