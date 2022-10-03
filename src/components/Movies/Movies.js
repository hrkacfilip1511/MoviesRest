import { useState } from "react";
import classes from "./Movies.module.css";
import movies from "../../movies.json";
import Movie from "../Movie/Movie";
import Heading from "../Heading/Heading";
const Movies = (props) => {
  //   console.log(movies);
  const [searchMovieValue, setSearchMovieValue] = useState("");
  const [movieDatas, setMovies] = useState(movies);
  const addMovieHandler = () => {
    console.log("Dodaj film");
  };
  return (
    <>
      <Heading />
      <div className={classes.movies}>
        <div className={classes.filterForm}>
          <button onClick={addMovieHandler}>Add movie</button>
          <input
            value={searchMovieValue}
            type="text"
            placeholder="Search movie"
            onChange={(e) => setSearchMovieValue(e.target.value)}
          />
        </div>
        <div className={classes.movieTable}>
          <div className={classes.movieTitles}>
            <span>Movie name</span>
            <span>Genre</span>
            <span>Release year</span>
          </div>

          {movieDatas.map((movie) => {
            return (
              <Movie
                key={movie.id}
                name={movie.name}
                genre={movie.genre}
                releaseYear={movie.releaseYear}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Movies;
