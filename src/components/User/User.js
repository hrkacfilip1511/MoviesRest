import classes from "./User.module.css";
import { FaPen, FaTrash } from "react-icons/fa";
import { useState } from "react";
import Modal from "../Modal/Modal";
import EditUser from "./EditUser";
const User = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const editUser = (e) => {
    console.log(e.target.value);
    setModalOpen(true);
  };
  const deleteUser = (id) => {
    console.log(id);
  };
  return (
    <div className={classes.userRow}>
      {isModalOpen && (
        <Modal setModalOpen={setModalOpen}>
          <EditUser setModalOpen={setModalOpen} />
        </Modal>
      )}
      <span>{props.name}</span>
      <span>{props.role}</span>
      <div className={classes.actions}>
        <button className={classes.editBtn} onClick={editUser}>
          <FaPen />
        </button>
        <button className={classes.deleteBtn} onClick={deleteUser}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
export default User;
