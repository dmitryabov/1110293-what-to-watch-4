import React from "react";
import renderer from "react-test-renderer";
import GenreList from "./genre-list.jsx";


const movieGenreTab = [`drama`, `comedy`];

it(`Render GenreList`, () => {

  const tree = renderer
  .create(<GenreList
    movieTabs={movieGenreTab}
    activeTab={`Crime`}
    clickOnTab={() => {}}
  />, {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
