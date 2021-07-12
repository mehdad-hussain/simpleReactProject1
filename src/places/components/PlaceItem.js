import React, { useState, useCallback, useEffect } from "react";

import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";

const PlaceItem = (props) => {
  const [mapState, setMapState] = useState(false);

  const showMap = () => setMapState(true);
  const closeMap = () => setMapState(false);

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
        modalSize='lg'
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

      <li className='mt-4 shadow'>
        <div className='card'>
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
          <Button click={showMap} color='outline-primary' m='2' p='2'>
            View On Map
          </Button>
          <Button color='success' m='2' py='2' px='4'>
            Edit
          </Button>
          <Button color='danger' m='2' py='2' px='3' rounded='0' shadow>
            Delete
          </Button>
        </div>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
