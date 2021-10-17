import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import PlaceList from "../components/PlaceList";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import Modal from "../../shared/components/UIElements/Modal";
import Button from "../../shared/components/FormElements/Button";
import { useHttpClient } from "../../shared/hooks/http_hook";

const UserPlaces = (props) => {
  const [placeList, setPlaceList] = useState();
  const { loadingMode, error, sendRequest, clearError } = useHttpClient();

  const userID = useParams().userId;

  useEffect(() => {
    const fetchPlaces = async () => {
      const response = await sendRequest(`places/user/${userID}`);
      setPlaceList(response.data.places);
    };
    fetchPlaces();
  }, [sendRequest, userID]);
  // const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userID);

  const deletePlaceHandler = (deletedPlaceId) => {
    setPlaceList((prevPlaces) =>
      prevPlaces.filter((place) => place.id !== deletedPlaceId)
    );
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

      {!loadingMode && placeList && (
        <PlaceList
          items={placeList}
          deletedPlace={deletePlaceHandler}
        ></PlaceList>
      )}
    </>
  );
};

export default UserPlaces;
