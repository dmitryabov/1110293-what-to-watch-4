import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";


const Movie = {
  movieName: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: `2014`
};

const movieNames = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `The Man Called Flintstone`,
  `Casper the Friendly Ghost`, `Peppa Pig`, `Aladdin`, `Finding Nemo`, `Toy Story`];

it(`Render WelcomeScreen`, () => {

  const tree = renderer
  .create(<WelcomeScreen
    movieName={Movie.movieName}
    genre={Movie.genre}
    year={Movie.year}
    movieNames={movieNames}
    onMovieCardTitleButtonHandler={() => {}}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
