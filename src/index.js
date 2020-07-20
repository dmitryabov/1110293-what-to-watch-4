import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import movies from "./mocks/movies";
import { BrowserRouter } from "react-router-dom";


const Movie = {
  movieName: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: `2014`
};


ReactDOM.render(
    <App
      movieName={Movie.movieName}
      genre={Movie.genre}
      year={Movie.year}
      movies={movies}

    />, document.querySelector(`#root`)
);
