import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./movie-list.jsx";


const movies = [{
  id: 1,
  src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  name: `Fantastic Beasts`
},
{
  id: 2,
  src: `img/bohemian-rhapsody.jpg`,
  name: `Bohemian Rhapsody`
}];

it(`Render MovieList`, () => {

  const tree = renderer
  .create(<MovieList
    movies={movies}
    onMovieCardClick={() => {}}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
