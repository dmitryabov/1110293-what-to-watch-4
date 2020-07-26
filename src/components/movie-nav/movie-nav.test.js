import React from "react";
import renderer from "react-test-renderer";
import MovieNav from "./movie-nav.jsx";


const movieTabs = [`Overview`, `Details`, `Reviews`];

it(`Render MovieNav`, () => {

  const tree = renderer
  .create(<MovieNav
    movieTabs={movieTabs}
    activeTab= {`Overview`}
    clickOnTab={() => {}}

  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
