import React, { useState, useCallback, useEffect, useContext } from "react";

import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import { loginContext } from "../../shared/context/login_context";

const PlaceItem = (props) => {
  const login = useContext(loginContext);

  const [mapState, setMapState] = useState(false);
  const [confirmModalState, setConfirmModalState] = useState(false);

  const showMap = () => setMapState(true);
  const closeMap = () => setMapState(false);

  const showWarningHandler = () => setConfirmModalState(true);
  const cancelDeleteHandler = () => setConfirmModalState(false);
  const confirmDeleteHandler = () => {
    console.log("DELETING...");
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && mapState) {
        setMapState(false);
        console.log("I pressed");
      }
    },
    [setMapState, mapState]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <React.Fragment>
      <Modal
        modalTitle={props.address}
        click={closeMap}
        state={mapState}
        modalSize='modal-lg'
        footer={
          <Button click={closeMap} classes='m-2 p-2 btn-outline-primary'>
            Close
          </Button>
        }
      >
        <div className='w-full h-96'>
          <Map
            center={props.coordinates}
            zoom={16}
            popUpImage={props.image}
            popUpDescription={props.description}
            popUpTitle={props.title}
          />
        </div>
      </Modal>

      <Modal
        modalTitle='Are you sure ?'
        click={cancelDeleteHandler}
        state={confirmModalState}
        footer={
          <>
            <Button
              click={cancelDeleteHandler}
              classes='m-2 p-2 btn-outline-primary'
            >
              Cancel
            </Button>
            <Button
              click={confirmDeleteHandler}
              classes='m-2 p-2 btn-danger rounded-0'
            >
              Delete
            </Button>
          </>
        }
      >
        <p>
          Do you want to proceed and delete this place? Please note that it
          can't be undone thereafter.
        </p>
      </Modal>

      <li className='mt-4 bg-white rounded shadow'>
        <div className=' card'>
          <img
            src={props.image}
            alt={props.title}
            className='w-100 h-100 img-fluid'
          />
        </div>
        <div className='p-4 text-center card-body'>
          <h4 className='card-title'>{props.title}</h4>
          <h5>{props.address}</h5>
          <p className='card-text'>{props.description}</p>
        </div>
        <div className='p-4 text-center'>
          <Button click={showMap} classes='m-2 p-2 btn-outline-primary'>
            View On Map
          </Button>
          {login.isLoggedIn && (
            <Button
              to={`/places/${props.id}`}
              classes='m-2 px-4 py-2 btn-success'
            >
              Edit
            </Button>
          )}
          {login.isLoggedIn && (
            <Button
              click={showWarningHandler}
              classes='m-2 px-3 py-2 btn-danger rounded-0 shadow-lg'
            >
              Delete
            </Button>
          )}
        </div>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
