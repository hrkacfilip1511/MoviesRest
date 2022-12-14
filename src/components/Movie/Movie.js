import classes from "./Movie.module.css";
import { FaPen, FaTrash } from "react-icons/fa";
import { useState } from "react";
import Modal from "../Modal/Modal";
import EditMovie from "./EditMovie";
const Movie = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const editMovie = (e) => {
    console.log(e.target.value);
    setModalOpen(true);
  };
  const deleteMovie = (id) => {
    console.log(id);
  };
  return (
    <div className={classes.movieRow}>
      {isModalOpen && (
        <Modal setModalOpen={setModalOpen}>
          <EditMovie setModalOpen={setModalOpen} />
        </Modal>
      )}
      <span>{props.name}</span>
      <span>{props.genre}</span>
      <span>{props.releaseYear}</span>
      <div className={classes.actions}>
        <button className={classes.editBtn} onClick={editMovie}>
          <FaPen />
        </button>
        <button className={classes.deleteBtn} onClick={deleteMovie}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
export default Movie;
