import classes from "./Movie.module.css";
import { FaPen, FaTrash } from "react-icons/fa";
const Movie = (props) => {
  const editMovie = (id) => {
    console.log(id);
  };
  const deleteMovie = (id) => {
    console.log(id);
  };
  return (
    <div className={classes.movieRow}>
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
