import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import Modal from "../../shared/components/UIElements/Modal";
import {
  VALIDATE_MINLENGTH,
  VALIDATE_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form_hook";
import { useHttpClient } from "../../shared/hooks/http_hook";
import { AuthContext } from "../../shared/context/auth_context";

const UpdatePlace = (props) => {
  const auth = useContext(AuthContext);
  const [loadedPlace, setLoadedPlace] = useState();
  const { loadingMode, error, sendRequest, clearError } = useHttpClient();
  const history = useHistory();

  const placeID = useParams().placeId;

  //  <!-- custom form hook -->
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
    },
    false
  );

  //  <!-- fetching data from server of targeted place for formData -->
  useEffect(() => {
    const fetchPlace = async () => {
      const response = await sendRequest(`places/${placeID}`);
      setLoadedPlace(response.data.place);
    };
    fetchPlace();
  }, [sendRequest, placeID]);

  // const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeID);

  //  <!-- function to send patch req & redirect to another place -->
  const submitHandler = async (event) => {
    event.preventDefault();
    const updatedData = {
      title: formState.inputs.title.value,
      description: formState.inputs.description.value,
    };

    await sendRequest(`/places/${placeID}`, "patch", updatedData);

    history.push(`/${auth.userId}/places`);
  };

  if (loadingMode) {
    return (
      <div className='m-5 text-center'>
        <LoadingSpinner />
      </div>
    );
  }

  if (!loadedPlace && !error) {
    return (
      <div className='w-1/3 p-6 m-12 mx-auto text-center bg-white rounded shadow-lg'>
        <h2>Could not find place!</h2>
      </div>
    );
  }

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

      {!loadingMode && loadedPlace && (
        <form
          className='p-2 m-12 mx-auto bg-white rounded shadow-lg 2xl:w-1/5 xl:w-1/4 lg:w-1/3 sm:w-2/5 xs:w-4/5'
          onSubmit={submitHandler}
        >
          <Input
            id='title'
            element='input'
            type='text'
            label='Title'
            validators={[VALIDATE_REQUIRE()]}
            errorText='Please enter a valid title.'
            onInput={inputHandler}
            initialValue={loadedPlace.title} // for formState.inputs.title.(value**)
            initialValid={true}
            // if we send props like this,form will be empty.As input.js get initialValue only for first time but not when form is re-rendered second time.
          />
          <Input
            id='description'
            element='textarea'
            label='Description'
            errorText='Please enter a valid description(at least 5 characters).'
            validators={[VALIDATE_MINLENGTH(5)]}
            onInput={inputHandler}
            initialValue={loadedPlace.description}
            initialValid={true}
          />
          <Button
            classes='m-2 px-3 py-2 btn-primary'
            type='submit'
            disabled={!formState.isValid}
          >
            Update Place
          </Button>
          <Button
            classes='m-2 px-3 py-2 bg-blue-500'
            to={`/${auth.userId}/places`}
          >
            Cancel
          </Button>
        </form>
      )}
    </>
  );
};

export default UpdatePlace;
