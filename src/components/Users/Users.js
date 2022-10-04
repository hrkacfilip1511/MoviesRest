import { useState } from "react";
import classes from "./Users.module.css";
import users from "../../users.json";
import User from "../User/User";
import Heading from "../Heading/Heading";
import AddUser from "../User/AddUser";
import Modal from "../Modal/Modal";
const Users = (props) => {
  const [searchUserValue, setSearchUserValue] = useState("");
  const [userDatas, setUsers] = useState(users);
  const [isModalOpen, setModalOpen] = useState(false);
  const addUserHandler = () => {
    setModalOpen(true);
  };
  const searchResults = userDatas.filter(
    (user) => searchUserValue === user.name.toLowerCase()
  );
  return (
    <div>
      <Heading />
      {isModalOpen && (
        <Modal setModalOpen={setModalOpen}>
          <AddUser setModalOpen={setModalOpen} />
        </Modal>
      )}
      <div className={classes.users}>
        <div className={classes.filterForm}>
          <button onClick={addUserHandler}>Add User</button>
          <input
            value={searchUserValue}
            type="text"
            placeholder="Search user by name"
            onChange={(e) => setSearchUserValue(e.target.value)}
          />
        </div>
        <div className={classes.userTable}>
          <div className={classes.userTitles}>
            <span>User name</span>
            <span>Role</span>
          </div>

          {searchResults.length > 0
            ? searchResults.map((result) => {
                return (
                  <User key={result.id} name={result.name} role={result.role} />
                );
              })
            : userDatas.map((user) => {
                return <User key={user.id} name={user.name} role={user.role} />;
              })}
        </div>
      </div>
    </div>
  );
};

export default Users;
