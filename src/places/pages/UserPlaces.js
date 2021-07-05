import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

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
    title: "Empire State Building",
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

const UserPlaces = (props) => {
  const userID = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userID);
  return <PlaceList items={loadedPlaces}></PlaceList>;
};

export default UserPlaces;
