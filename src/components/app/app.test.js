import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";


const Movie = {
  movieName: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: `2014`
};

const movieNames = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `The Man Called Flintstone`,
  `Casper the Friendly Ghost`, `Peppa Pig`, `Aladdin`, `Finding Nemo`, `Toy Story`];

const movies = [
  {
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    name: `Fantastic Beasts`
  },
  {
    src: `img/bohemian-rhapsody.jpg`,
    name: `Bohemian Rhapsody`
  }
];

it(`Render App`, () => {

  const tree = renderer
  .create(<App
    movieName={Movie.movieName}
    genre={Movie.genre}
    year={Movie.year}
    movieNames={movieNames}
    movies={movies}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
