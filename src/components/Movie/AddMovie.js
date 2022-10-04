import React, { useState } from "react";
import classes from "./AddMovie.module.css";
const AddMovie = (props) => {
  const [movieName, setMovieName] = useState("");
  const [genre, setGenre] = useState("");
  const [realeaseYear, setRealeaseYear] = useState("");

  const addMovieHandler = (e) => {
    e.preventDefault();
  };
  const closeModal = () => {
    props.setModalOpen(false);
  };
  return (
    <div>
      <form onSubmit={addMovieHandler}>
        <div className={classes.addMovieContainer}>
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
              Add Movie
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

export default AddMovie;
