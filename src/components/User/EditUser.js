import React, { useState } from "react";
import Modal from "../Modal/Modal";
import classes from "./EditUser.module.css";
const EditUser = (props) => {
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("");
  const closeModal = () => {
    props.setModalOpen(false);
  };
  const editUserHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={editUserHandler}>
        <div className={classes.editUserContainer}>
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
              Update User
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

export default EditUser;
