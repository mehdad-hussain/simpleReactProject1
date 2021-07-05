import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg",
    address: "350 Fifth Avenue Manhattan, New York 10118",
    location: {
      lat: 40.748433,
      lng: -73.985656,
    },
    creator: "u2",
  },
];

const UserPlaces = (props) => {
  return <PlaceList items={DUMMY_PLACES}></PlaceList>;
};

export default UserPlaces;
