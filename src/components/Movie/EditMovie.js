import React, { useState } from "react";
import Modal from "../Modal/Modal";
import classes from "./EditMovie.module.css";
const EditMovie = (props) => {
  const [movieName, setMovieName] = useState("");
  const [genre, setGenre] = useState("");
  const [realeaseYear, setRealeaseYear] = useState("");
  const closeModal = () => {
    props.setModalOpen(false);
  };
  const editMovieHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={editMovieHandler}>
        <div className={classes.editMovieContainer}>
          <div className={classes.movieName}>
            <input
              type="text"
              placeholder="Movie name"
              value={movieName}
              onChange={(e) => setMovieName(e.target.value)}
            />
          </div>
          <div className={classes.genre}>
            <input
              type="text"
              placeholder="Genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>
          <div className={classes.realeaseYear}>
            <input
              type="text"
              placeholder="Realease Year"
              value={realeaseYear}
              onChange={(e) => setRealeaseYear(e.target.value)}
            />
          </div>
          <div className={classes.action}>
            <button type="submit" className={classes.submitBtn}>
              Update Movie
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

export default EditMovie;
