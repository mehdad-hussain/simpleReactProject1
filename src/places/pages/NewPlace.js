import { useContext } from "react";
import { useHistory } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import Modal from "../../shared/components/UIElements/Modal";
import ImageUpload from "../../shared/components/FormElements/ImageUpload";

import {
  VALIDATE_MINLENGTH,
  VALIDATE_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form_hook";
import { useHttpClient } from "../../shared/hooks/http_hook";
import { AuthContext } from "../../shared/context/auth_context";

//  <!-- NewPlace COMPONENT -->
const NewPlace = (props) => {
  const auth = useContext(AuthContext);
  const { loadingMode, error, sendRequest, clearError } = useHttpClient();

  //  <!-- Form custom hook -->
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
      image: {
        value: null,
        isValid: false,
      },
    },
    false
  );

  //  <!-- history hook to redirect page after adding new place successfully -->
  const history = useHistory();

  //  <!-- function to handle form & send post request -->
  const submitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", formState.inputs.title.value);
    formData.append("description", formState.inputs.description.value);
    formData.append("address", formState.inputs.address.value);
    formData.append("creator", auth.userId);
    formData.append("image", formState.inputs.image.value);

    await sendRequest("places", "post", formData);
    history.push(`/${auth.userId}/places`);
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

      {loadingMode && <LoadingSpinner />}
      <div className='m-12 mx-auto bg-white rounded shadow-lg 2xl:w-1/5 xl:w-1/4 lg:w-1/3 sm:w-2/5 xs:w-4/5'>
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
            <ImageUpload
              id='image'
              input={inputHandler}
              errorText='Please upload an image'
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
    </>
  );
};

export default NewPlace;
