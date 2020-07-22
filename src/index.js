import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import movies from "./mocks/movies";
import comments from "./mocks/comments";


const Movie = {
  movieName: `Fantastic Beasts`,
  genre: `Drama`,
  year: `2014`
};


ReactDOM.render(
    <App
      movieName={Movie.movieName}
      genre={Movie.genre}
      year={Movie.year}
      movies={movies}
      comments={comments}
    />, document.querySelector(`#root`)
);
