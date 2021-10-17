import React, { useEffect, useState } from "react";

import Button from "../../shared/components/FormElements/Button";
import UserList from "../components/UsersList";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import Modal from "../../shared/components/UIElements/Modal";
import { useHttpClient } from "../../shared/hooks/http_hook";

const Users = (props) => {
  const [userList, setUserList] = useState();
  const { loadingMode, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await sendRequest("users");
      setUserList(response.data.users);
    };
    fetchUsers();
  }, [sendRequest]);

  return (
    <>
      <Modal
        modalSize='modal-md'
        headerClass='bg-red-500'
        modalTitle='An Error Occurred'
        click={clearError}
        state={error}
        footer={
          <Button click={clearError} classes='m-2 p-2 btn-outline-primary'>
            Okay
          </Button>
        }
      >
        <p>{error}</p>
      </Modal>
      {loadingMode && <LoadingSpinner />}
      <h1>This is user's Page!</h1>
      {!loadingMode && userList && <UserList items={userList} />}
    </>
  );
};

export default Users;
