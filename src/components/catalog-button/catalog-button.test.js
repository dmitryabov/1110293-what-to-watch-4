import React from "react";
import renderer from "react-test-renderer";
import CatalogButton from "./catalog-button.jsx";


it(`Render WelcomeScreen`, () => {

  const tree = renderer
  .create(<CatalogButton
    clickOnButton={() => {}}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
