import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";


const Movie = {
  movieName: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: `2014`
};


const movies = [
  {
    id: 1,
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    name: `Fantastic Beasts`
  },
  {
    id: 2,
    src: `img/bohemian-rhapsody.jpg`,
    name: `Bohemian Rhapsody`
  },
];

it(`Render App`, () => {
  const tree = renderer
  .create(<App
    movieName={Movie.movieName}
    genre={Movie.genre}
    year={Movie.year}
    movies={movies}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
