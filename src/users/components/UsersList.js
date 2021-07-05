import UserItem from "./UserItem";
// import "./UsersList.css";
import Card from "../../shared/components/UIElements/Card";

const UsersList = (props) => {
  const myStyle = {
    listStyle: "none",
    maxWidth: "50rem",
    // width: "90%",
  };

  if (props.items.length === 0) {
    return (
      <Card>
        <div className=' text-center d-flex justify-content-center align-items-center w-90'>
          <h2>No User Found !!!</h2>
        </div>
      </Card>
    );
  } else {
    return (
      <ul
        className=' w-90 m-auto p-0 d-flex justify-content-center flex-wrap'
        style={myStyle}
      >
        {props.items.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.placeNumber}
          />
        ))}
      </ul>
    );
  }
};

export default UsersList;
