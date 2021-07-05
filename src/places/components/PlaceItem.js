import Button from "../../shared/components/UIElements/Button";

const PlaceItem = (props) => {
  return (
    <li style={{ listStyle: "none", margin: 6 }} className='shadow'>
      <div className='card'>
        <img src={props.image} alt={props.title} className='img-fluid' />
      </div>
      <div className='card-body bg-purple-500'>
        <h4 className='card-title'>{props.title}</h4>
        <h5>{props.address}</h5>
        <p className='card-text'>{props.description}</p>
        <div className=''>
          <Button color='primary' m='-2' p='-2'>
            View On Map
          </Button>
          <Button color='success' m='-2' p='x-2'>
            Edit
          </Button>
          <Button color='danger' m='-2' p='-2'>
            Delete
          </Button>
        </div>
      </div>
    </li>
  );
};

export default PlaceItem;
