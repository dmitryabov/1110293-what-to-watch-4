import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";


const movieCardHandler = () => {};

const App = (props) => {
  const {movieName, genre, year, movies} = props;
  return (
    <WelcomeScreen
      movieName={movieName}
      genre={genre}
      year={year}
      movies={movies}
      onMovieCardClick={movieCardHandler}
    />
  );
};

App.propTypes = {
  movieName: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired
};

export default App;
