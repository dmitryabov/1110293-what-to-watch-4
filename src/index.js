import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Movie = {
  movieName: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: `2014`
};

const movieNames = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `The Man Called Flintstone`,
  `Casper the Friendly Ghost`, `Peppa Pig`, `Aladdin`, `Finding Nemo`, `Toy Story`];

ReactDOM.render(
    <App
      movieName={Movie.movieName} genre={Movie.genre} year={Movie.year} movieNames={movieNames}/>,
    document.querySelector(`#root`)
);
