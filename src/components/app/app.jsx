import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";


const App = (props) => {
  const {movieName, genre, year, movieNames} = props;
  return (
    <WelcomeScreen
      movieName={movieName}
      genre={genre}
      year={year}
      movieNames={movieNames}
    />
  );
};


App.propTypes = {
  movieName: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  movieNames: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired
};

export default App;
