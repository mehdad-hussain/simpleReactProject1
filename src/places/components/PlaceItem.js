import Button from "../../shared/components/FormElements/Button";

const PlaceItem = (props) => {
  return (
    <li className='shadow mt-4'>
      <div className='card'>
        <img
          src={props.image}
          alt={props.title}
          className='w-100 h-100 img-fluid'
        />
      </div>
      <div className=' text-center card-body  p-4'>
        <h4 className='card-title'>{props.title}</h4>
        <h5>{props.address}</h5>
        <p className='card-text'>{props.description}</p>
      </div>
      <div className='p-4 text-center'>
        <Button color='outline-primary' m='2' p='2'>
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
  );
};

export default PlaceItem;
