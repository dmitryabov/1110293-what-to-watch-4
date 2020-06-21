import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";


const movie =
  {
    id: 1,
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    name: `Fantastic Beasts`
  };

it(`Render MovieCard`, () => {

  const tree = renderer
  .create(<MovieCard
    movies={movie}
    onMovieCardClick={() => {}}
    onMouseEnterCard={() => {}}
    onMouseLeaveCard={() => {}}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
