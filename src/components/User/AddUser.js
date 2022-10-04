import React, { useState } from "react";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
  };
  const closeModal = () => {
    props.setModalOpen(false);
  };
  return (
    <div>
      <form onSubmit={addUserHandler}>
        <div className={classes.addUserContainer}>
          <div className={classes.userName}>
            <input
              type="text"
              placeholder="User name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className={classes.role}>
            <input
              type="text"
              placeholder="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>

          <div className={classes.action}>
            <button type="submit" className={classes.submitBtn}>
              Add User
            </button>
            <button className={classes.cancelBtn} onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
