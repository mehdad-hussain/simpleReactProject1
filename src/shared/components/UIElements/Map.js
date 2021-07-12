import React, { useRef, useEffect, useState } from "react";
import ReactMapGL, {
  Marker,
  Popup,
  GeolocateControl,
  FullscreenControl,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";
import "./Map.css";

const Map = (props) => {
  /*---------------------------------------------------------------------
    react-map-gl
    ----------------------------------------------------------------------*/
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoibWVoZGFkLWh1c3NhaW4iLCJhIjoiY2txeTZoZDhyMG9ncTJvbng2cjgwMTU1bCJ9.3B_IUMUQ3GOXBQK3MZHCvg";

  const { lat, lng } = props.center;

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: lat,
    longitude: lng,
    zoom: props.zoom,
  });

  const [showPopup, togglePopup] = useState(false);

  // // Only rerender markers if props.data has changed
  // const markers = React.useMemo(
  //   () =>
  //     data.map((city) => (
  //       <Marker key={city.name} longitude={lat} latitude={lng}>
  //         <img src='pin.png' />
  //       </Marker>
  //     )),
  //   [lat, lng]
  // );

  const ICON = `m12 0c-4.4183 2.3685e-15 -8 3.5817-8 8 0 1.421 0.3816 2.75 1.0312 3.906 0.1079 0.192 0.221 0.381 0.3438 0.563l6.625 11.531 6.625-11.531c0.102-0.151 0.19-0.311 0.281-0.469l0.063-0.094c0.649-1.156 1.031-2.485 1.031-3.906 0-4.4183-3.582-8-8-8zm0 4c2.209 0 4 1.7909 4 4 0 2.209-1.791 4-4 4-2.2091 0-4-1.791-4-4 0-2.2091 1.7909-4 4-4z`;

  const SIZE = 35;
  const positionOptions = { enableHighAccuracy: true };

  return (
    <ReactMapGL
      {...viewport}
      mapStyle='mapbox://styles/mapbox/dark-v9'
      // mapStyle='mapbox://styles/mehdad-hussain/ckqy7d7132kii18p7pumdshn8'
      mapboxApiAccessToken={MAPBOX_TOKEN}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {showPopup && (
        <Popup
          latitude={lat}
          longitude={lng}
          closeButton={true}
          closeOnClick={false}
          onClose={() => togglePopup(false)}
          anchor='top'
          className='w-20 '
        >
          <div className='p-2'>
            <p className='font-bold'>{props.popUpTitle}</p>
            <img src={props.popUpImage} alt='pop-upImage' />
            <p>{props.popUpDescription}</p>
          </div>
        </Popup>
      )}
      <Marker latitude={lat} longitude={lng} offsetLeft={-20} offsetTop={-10}>
        <svg
          height={SIZE}
          viewBox='0 0 24 24'
          style={{
            cursor: "pointer",
            // fill: "#2b77c1",
            // fill: '#d00',
            fill: "#fff",
            // fill: "#e74c3c",
            stroke: "none",
            transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
          }}
          onClick={() => togglePopup(true)}
        >
          <path d={ICON} />
          {/* <path
            d='m12 3c-2.7614 0-5 2.2386-5 5 0 2.761 2.2386 5 5 5 2.761 0 5-2.239 5-5 0-2.7614-2.239-5-5-5zm0 2c1.657 0 3 1.3431 3 3s-1.343 3-3 3-3-1.3431-3-3 1.343-3 3-3z'
            fill='#2b77c1'
          /> */}
        </svg>
      </Marker>
      <GeolocateControl
        className='geolocateStyle'
        positionOptions={positionOptions}
        trackUserLocation
        // auto
      />
      <FullscreenControl className='fullscreenControlStyle' />
      <NavigationControl className='navStyle' />
      <ScaleControl className='scaleControlStyle' />
    </ReactMapGL>
  );
  /*---------------------------------------------------------------------
    Google api but it's need $$$ to use 
  ----------------------------------------------------------------------*/
  // const mapRef = useRef();
  // const { center, zoom } = props;
  // useEffect(() => {
  //   const map = new window.google.maps.Map(mapRef.current, {
  //     center: center,
  //     zoom: zoom,
  //     //   mapId: "79f1005f9edb684e",
  //   });
  //   new window.google.maps.Marker({ position: center, map: map });
  // }, [center, zoom]);
  // return <div ref={mapRef} id='map' className='w-full h-full'></div>;

  /*---------------------------------------------------------------------
    new map
  ----------------------------------------------------------------------*/
  // const REACT_APP_API_KEY = "AIzaSyBL23-cipI6Rii9KF36MNvuhNoYbRJEA6I";

  // const googleMapRef = useRef();

  // let googleMap;

  // useEffect(() => {
  //   const googleMapScript = document.createElement("script");
  //   googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${REACT_APP_API_KEY}&libraries=places`;
  //   googleMapScript.async = true;
  //   window.document.body.appendChild(googleMapScript);
  //   googleMapScript.addEventListener("load", () => {
  //     getLatLng();
  //   });
  // });

  // const createGoogleMap = (coordinates) => {
  //   googleMap = new window.google.maps.Map(googleMapRef.current, {
  //     zoom: 16,
  //     center: {
  //       lat: coordinates.lat(),
  //       lng: coordinates.lng(),
  //     },
  //     disableDefaultUI: true,
  //   });
  // };

  // const getLatLng = () => {
  //   let lat, lng, placeId;
  //   new window.google.maps.Geocoder().geocode(
  //     { address: `350 Fifth Avenue Manhattan, New York 10118` },

  //     function (results, status) {
  //       if (status === window.google.maps.GeocoderStatus.OK) {
  //         placeId = results[0].place_id;
  //         createGoogleMap(results[0].geometry.location);
  //         lat = results[0].geometry.location.lat();
  //         lng = results[0].geometry.location.lng();
  //         new window.google.maps.Marker({
  //           position: { lat, lng },
  //           map: googleMap,
  //           animation: window.google.maps.Animation.DROP,
  //           title: `350 Fifth Avenue Manhattan, New York 10118`,
  //         });
  //       } else {
  //         alert(
  //           "Geocode was not successful for the following reason: " + status
  //         );
  //       }
  //     }
  //   );
  // };

  // return (
  //   <div
  //     id='google-map'
  //     ref={googleMapRef}
  //     style={{ width: "400px", height: "300px" }}
  //   />
  // );
};

export default Map;
