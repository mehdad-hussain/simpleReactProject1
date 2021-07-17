import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import PlaceItem from "./PlaceItem";

const PlaceList = (props) => {
  const myStyle = {
    listStyle: "none",
    margin: "1rem auto",
    padding: 0,
    width: "90%",
    maxWidth: "40rem",
  };

  if (props.items.length === 0) {
    return (
      <Card className='w-3/4 p-2 m-12 mx-auto text-center shadow-lg h-3/4 lg:w-1/2'>
        <h2>No Places found. Maybe create one?</h2>
        <Button to='/places/new' p='w-2/4' m='m-3 mx-auto' color='btn-primary'>
          Share Place
        </Button>
      </Card>
    );
  }
  return (
    <ul className='' style={myStyle}>
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
