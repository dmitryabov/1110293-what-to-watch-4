import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";


const Movie = {
  movieName: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: `2014`
};

const movies = [{
  src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  name: `Fantastic Beasts`
},
{
  src: `img/bohemian-rhapsody.jpg`,
  name: `Bohemian Rhapsody`
}];

const movieCardHandler = () => {};

it(`Render WelcomeScreen`, () => {

  const tree = renderer
  .create(<WelcomeScreen
    movieName={Movie.movieName}
    genre={Movie.genre}
    year={Movie.year}
    movies={movies}
    onMovieCardClick={movieCardHandler}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
