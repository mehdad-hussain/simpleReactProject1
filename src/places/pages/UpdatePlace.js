import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATE_MINLENGTH,
  VALIDATE_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form_hook";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "350 Fifth Avenue Manhattan, New York 10118",
    location: {
      lat: 40.748433,
      lng: -73.985656,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Emp. State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "350 Fifth Avenue Manhattan, New York 10118",
    location: {
      lat: 40.748433,
      lng: -73.985656,
    },
    creator: "u2",
  },
];

const UpdatePlace = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
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

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);
  // calling it like this without useEffect lead to infinite loop

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className='w-1/3 p-6 m-12 mx-auto text-center bg-white rounded shadow-lg'>
        <h2>Could not find place!</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className='m-5 text-center'>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form
      className='w-3/4 m-12 mx-auto bg-white rounded shadow-lg h-3/4 lg:w-1/2'
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
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
        // if we send props like this,form will be empty.As input.js get initialValue only for first time but not when form is re-rendered second time.
      />
      <Input
        id='description'
        element='textarea'
        label='Description'
        errorText='Please enter a valid description(at least 5 characters).'
        validators={[VALIDATE_MINLENGTH(5)]}
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
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
        to={`/${identifiedPlace.creator}/places`}
      >
        Cancel
      </Button>
    </form>
  );
};

export default UpdatePlace;
