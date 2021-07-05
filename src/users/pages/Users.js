import UserList from "../components/UsersList";

const Users = (props) => {
  const USERS = [
    {
      id: "u1",
      name: "Mehdad Hussain",
      image: "https://source.unsplash.com/random/300x200",
      placeNumber: 3,
    },
    {
      id: "u2",
      name: "Salahudddin",
      image: "https://source.unsplash.com/random/300x201",
      placeNumber: 4,
    },
  ];

  return (
    <>
      <h1>This is user's Page!</h1>
      <UserList items={USERS} />
    </>
  );
};

export default Users;