import UserItem from "./UserItem";
// import "./UsersList.css";
import Card from "../../shared/components/UIElements/Card";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <Card>
        <div className='text-center d-flex justify-content-center align-items-center w-90'>
          <h2>No User Found !!!</h2>
        </div>
      </Card>
    );
  } else {
    return (
      <ul className='flex-wrap max-w-[50rem] p-0 m-auto list-none w-90 d-flex justify-content-center'>
        {props.items.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.avatar}
            name={user.name}
            placeCount={user.places.length}
          />
        ))}
      </ul>
    );
  }
};

export default UsersList;
