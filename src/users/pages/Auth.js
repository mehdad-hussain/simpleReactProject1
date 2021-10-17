import { useState, useContext } from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import Modal from "../../shared/components/UIElements/Modal";
import ImageUpload from "../../shared/components/FormElements/ImageUpload";
import {
  VALIDATE_EMAIL,
  VALIDATE_MINLENGTH,
  VALIDATE_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form_hook";
import { AuthContext } from "../../shared/context/auth_context";
import { useHttpClient } from "../../shared/hooks/http_hook";

const Auth = (props) => {
  const auth = useContext(AuthContext);
  const [loginMode, setLoginMode] = useState(true);

  const { loadingMode, error, sendRequest, clearError } = useHttpClient();

  //  <!-- Using Custom Form hook -->
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

  //  <!-- function to fetch data from backend & authContext to login & signup -->
  const submitHandler = async (event) => {
    event.preventDefault();

    if (loginMode) {
      const dataForLogin = {
        email: formState.inputs.email.value,
        password: formState.inputs.password.value,
      };

      const response = await sendRequest("users/login", "post", dataForLogin);
      auth.login(response.data.user.id);
      // setLoadingMode(true);
      // axios
      //   .post("users/login", dataForLogin)
      //   .then((res) => {
      //     setLoadingMode(false);
      //     auth.login();
      //   })
      //   .catch((err) => {
      //     setLoadingMode(false);
      //     setError(err.message || "Something went wrong, please try again.");
      //   });
    } else {
      const formData = new FormData();
      formData.append("name", formState.inputs.name.value);
      formData.append("email", formState.inputs.email.value);
      formData.append("password", formState.inputs.password.value);
      formData.append("image", formState.inputs.image.value);

      const response = await sendRequest("users/signup", "post", formData);
      auth.login(response.data.user.id);
    }
  };

  //  <!-- Using function to switch between signup and login mode -->
  const switchModeHandler = () => {
    if (!loginMode) {
      setFromData(
        {
          ...formState.inputs, // otherwise all fields will be undefined
          name: undefined, // to drop it from storage
          image: undefined,
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
          image: {
            value: null,
            isValid: false,
          },
        },
        [false]
      );
    }
    setLoginMode((p) => !p);
  };

  return (
    <>
      <Modal
        modalSize='modal-md'
        headerClass='bg-red-500'
        modalTitle='An Error Occurred'
        click={clearError}
        state={error}
        footer={
          <Button click={clearError} classes='m-2 p-2 btn-outline-primary'>
            Okay
          </Button>
        }
      >
        <p>{error}</p>
      </Modal>

      <div className='m-6 mx-auto bg-white rounded shadow-lg 2xl:w-1/5 xl:w-1/4 lg:w-1/3 sm:w-2/5 xs:w-4/5'>
        <div className='card-body'>
          {loadingMode && <LoadingSpinner asOverlay />}
          <h4 className='p-1 text-center'>Login Required</h4>
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
            {!loginMode && (
              <ImageUpload
                id='image'
                input={inputHandler}
                errorText='Please upload an image'
              />
            )}
            {/* as both handler has same dependencies & parameter */}
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
                classes='m-1 px-5 py-2 mb-2 btn-primary'
                type='submit'
                disabled={!formState.isValid}
              >
                {loginMode ? "Log in" : "Sign up"}
              </Button>
            </div>
          </form>
          <div className='text-center'>
            {loginMode && (
              <p className='font-medium text-yellow-800'>
                Don't have an account?
              </p>
            )}
            <Button
              click={switchModeHandler}
              classes='m-1 mx-auto w-3/4 py-2 btn-secondary'
            >
              Switch to {loginMode ? "Sign Up" : "Log in"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
