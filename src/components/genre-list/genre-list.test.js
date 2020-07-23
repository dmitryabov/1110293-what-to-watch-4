import React from "react";
import renderer from "react-test-renderer";
import GenreList from "./genre-list.jsx";


const movieGenreTab = [`drama`, `comedy`];

it(`Render WelcomeScreen`, () => {

  const tree = renderer
  .create(<GenreList
    movieGenreTab={movieGenreTab}
    activeTab={`Crime`}
    onGenreTabClick={() => {}}
    getMovieGenre={() => {}}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
