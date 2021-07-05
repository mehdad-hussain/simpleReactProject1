import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/UIElements/Button";
import PlaceItem from "./PlaceItem";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className=''>
        <Card>
          <h2>No Places found. Maybe create one?</h2>
          <Button>Share Place</Button>
        </Card>
      </div>
    );
  }
  return (
    <ul
      className='m-0 p-0 mx-auto w-90'
      style={{ listStyle: "none", margin: 6 }}
    >
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
