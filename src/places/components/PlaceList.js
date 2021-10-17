import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import PlaceItem from "./PlaceItem";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <Card className='w-3/4 p-2 m-12 mx-auto text-center shadow-lg h-3/4 lg:w-1/2'>
        <h2>No Places found. Maybe create one?</h2>
        <Button
          to='/places/new'
          classes='mx-auto md:w-1/3 xs:w-4/5 m-1 px-4 py-2 btn-primary'
        >
          Share Place
        </Button>
      </Card>
    );
  }

  return (
    <ul className='w-4/5 max-w-lg p-0 m-auto list-none'>
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
          deletePlace={props.deletedPlace}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
